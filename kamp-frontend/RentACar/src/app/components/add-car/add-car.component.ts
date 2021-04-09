import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand/brand';
import { Color } from 'src/app/models/color/color';
import { BrandService } from 'src/app/services/brand/brand.service';
import { CarService } from 'src/app/services/Car/car.service';
import { ColorService } from 'src/app/services/color/color.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css'],
})
export class AddCarComponent implements OnInit {
  carForm: FormGroup;
  brands: Brand[];
  colors: Color[];
  operationType: string;
  currentCarId: number;

  constructor(
    private formBuilder: FormBuilder,
    private carService: CarService,
    private brandService: BrandService,
    private colorService: ColorService,
    private toastrService: ToastrService,
    private router: Router,
    private activetedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getBrands();
    this.getColors();
    this.activetedRoute.params.subscribe((params) => {
      if (params['car']) {
        this.operationType = 'Update';
        this.createCarEditForm(params['car']);
        
      } else {
        this.createCarAddForm();
    
        this.operationType = 'Add';
      }
    });
    
  }
  createCarEditForm(carId: number) {
    this.currentCarId = carId;

    this.carForm = this.formBuilder.group({
      carId:[''],
      carName: ['',Validators.required],
      brandId: ['', Validators.required],
      colorId: ['', Validators.required],
      modelYear: ['', Validators.required],
      dailyPrice: ['', Validators.required],
      description: ['', Validators.required],
    });
    
     this.carService.getById(carId).subscribe(response => {
      this.carForm.patchValue({
      carId:response.data.carId,
      carName: response.data.carName,
      brandId: response.data.brandId,
      colorId:response.data.colorId,
      modelYear:response.data.modelYear,
      dailyPrice:response.data.dailyPrice,
      description:response.data.description,
    });
    });
    
  }

  createCarAddForm() {
    this.carForm = this.formBuilder.group({
      carName: ['', Validators.required],
      brandId: ['', Validators.required],
      colorId: ['', Validators.required],
      modelYear: ['', Validators.required],
      dailyPrice: ['', Validators.required],
      description: ['', Validators.required],
      // minFindexScore: ['', Validators.required],
    });
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }

  addCar() {
    if (this.carForm.valid) {
      let car = Object.assign({}, this.carForm.value);
      this.carService.addCar(car).subscribe((response) => {
        this.toastrService.success(response.message);
      },responseError=> {
         if (responseError.error.Errors.length > 0) {
            for (let i = 0; i < responseError.error.Errors.length; i++) {
              this.toastrService.error(
                responseError.error.Errors[i].ErrorMessage,
                'Dogrulama hatasi'
              );
            }
          }
      });
    } else {
      this.toastrService.error('Form Invalid');
    }
  }

  updateCar(){
     if (this.carForm.valid) {
      let car = Object.assign({}, this.carForm.value);
      this.carService.updateCar(car).subscribe((response)=>{
       this.toastrService.success(response.message);
      },responseError=> {
         if (responseError.error.Errors.length > 0) {
            for (let i = 0; i < responseError.error.Errors.length; i++) {
              this.toastrService.error(
                responseError.error.Errors[i].ErrorMessage,
                'Dogrulama hatasi'
              );
            }
          }
      });
    } else {
      this.toastrService.error('Form Invalid');
    }
  }
}
