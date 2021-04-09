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
import { ColorService } from 'src/app/services/color/color.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-color',
  templateUrl: './add-color.component.html',
  styleUrls: ['./add-color.component.css']
})
export class AddColorComponent implements OnInit {
 operationType: string;
  colorForm: FormGroup;
  currentColorId: number;

  constructor(
    private formBuilder: FormBuilder,
    private colorService: ColorService,
    private toastrService: ToastrService,
    private router: Router,
    private activetedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    
    this.activetedRoute.params.subscribe((params) => {
      if (params['color']) {
        this.operationType = 'Update';
        this.createColorEditForm(params['color']);
      } else {
        this.operationType = 'Add';
        this.createColorAddForm();
      }
    });
  }

  createColorEditForm(colorId: number) {
     this.currentColorId = colorId;

    this.colorForm = this.formBuilder.group({
      colorId:[''],
      colorName: ['', Validators.required],
    });
   
     this.colorService.getById(colorId).subscribe(response => {
      this.colorForm.patchValue({
      colorId: response.data.colorId,
      colorName: response.data.colorName,
    });
    });
    
  }

  createColorAddForm() {
    this.colorForm = this.formBuilder.group({
      colorName: ['', Validators.required],
    });
  }

  addColor() {
    if (this.colorForm.valid) {
      let color = Object.assign({}, this.colorForm.value);
      this.colorService.addColor(color).subscribe((response) => {
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

  updateColor() {
    if (this.colorForm.valid) {
      let color = Object.assign({}, this.colorForm.value);
      this.colorService.updateColor(color).subscribe((response)=>{
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
