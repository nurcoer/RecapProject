import { Brand } from './../../models/brand/brand';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BrandService } from 'src/app/services/brand/brand.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css'],
})
export class AddBrandComponent implements OnInit {
  operationType: string;
  brandForm: FormGroup;
  currentBrandId: number;

  constructor(
    private formBuilder: FormBuilder,
    private brandService: BrandService,
    private toastrService: ToastrService,
    private router: Router,
    private activetedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    
    this.activetedRoute.params.subscribe((params) => {
      if (params['brand']) {
        this.operationType = 'Update';
        this.createBrandEditForm(params['brand']);
      } else {
        this.createBrandAddForm();
        this.operationType = 'Add';
      }
    });
  }

  createBrandEditForm(brandId: number) {
    this.currentBrandId = brandId;

    this.brandForm = this.formBuilder.group({
      brandId:[''],
      brandName: ['', Validators.required],
    });
    
     this.brandService.getById(brandId).subscribe(response => {
      this.brandForm.patchValue({
      brandId: response.data.brandId,
      brandName: response.data.brandName,
    });
    });
    
  }

  createBrandAddForm() {
    this.brandForm = this.formBuilder.group({
      brandName: ['', Validators.required],
    });
  }

  addBrand() {
    if (this.brandForm.valid) {
      let brand = Object.assign({}, this.brandForm.value);
      this.brandService.addBrand(brand).subscribe((response) => {
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

  updateBrand() {
    if (this.brandForm.valid) {
      let brand = Object.assign({}, this.brandForm.value);
      this.brandService.updateBrand(brand).subscribe((response)=>{
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
