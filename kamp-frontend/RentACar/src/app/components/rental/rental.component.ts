
import { CarDetail } from 'src/app/models/carDetail/carDetail';
import { RentalService } from 'src/app/services/rental/rental.service';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { Customer } from 'src/app/models/customer/customer';
import { Rental } from 'src/app/models/rental/rental';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css'],
})
export class RentalComponent implements OnInit {
   @Input() car : CarDetail;
  customers:Customer[];
  customerId:number;
  rentDate: Date;
  returnDate : Date;

   minDate: string | any;
  maxDate: string | null;
  maxMinDate: string | null;
  firstDateSelected: boolean = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private customerService: CustomerService,
    private rentalService:RentalService,
    private datePipe: DatePipe,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
this.getCustomer();
this.getRentalCarDate();
  }
  getRentMinDate() {
    this.minDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    return this.minDate;
  }

  getReturnMinDate() {
    if (this.rentDate != undefined) {
      let stringToDate = new Date(this.rentDate);
      let new_date = new Date();
      new_date.setDate(stringToDate.getDate() + 1);
      return new_date.toISOString().slice(0, 10);
    } else {
      return this.rentDate;
    }
  }
  getReturnMaxDate() {
    this.maxDate = this.datePipe.transform(
      new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
      'yyyy-MM-dd'
    );
    return this.maxDate;
  }
  onChangeEvent(event: any) {
    this.minDate = event.target.value;
    this.firstDateSelected = true;
  }
  createRental() {
    let MyRental: Rental = {
      carId : this.car.carId,
      brandName : this.car.brandName,
      colorName : this.car.colorName,
      carDailyPrice : this.car.dailyPrice,
      customerId : this.customerId,
      rentDate : this.rentDate,
      returnDate : this.returnDate,
    };
    if (!MyRental.customerId || !MyRental.rentDate) {
      this.toastrService.error("Bilgilerinizi kontrol edin","Bilgilerinizi kontrol edin")
    } else{
       this.router.navigate(['/payment/', JSON.stringify(MyRental)]);
    }
  }
  getCustomer() {
    this.customerService.getCustomer().subscribe((response) => {
      this.customers = response.data;
      
    });
  }
  getRentalCarDate(){
    this.rentalService.getRentalById(this.car.carId).subscribe((response)=>{
      console.log(response);
      //bu araca ait rental bilgileri rental db den gelcek 
      //return date başlangıç getRentMinDate() de min değer bu radaki tarihten başlayacak
    })
  }

}
