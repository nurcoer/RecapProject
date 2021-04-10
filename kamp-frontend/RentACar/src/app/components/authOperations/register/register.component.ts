import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import {LocalService} from 'src/app/services/storages/localStorage/local.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastrService: ToastrService,
    private router: Router,
    private localStorageService: LocalService
  ) {}

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.registerForm = this.formBuilder.group({
      firstName:['', Validators.required],
      lastName:['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  register(){
     if (this.registerForm.valid) {
      let registerModel = Object.assign({}, this.registerForm.value);
     
      this.authService.register(registerModel).subscribe(
        (response) => {
          this.toastrService.info(response.message);
        //  this.localStorageService.addStorage('token',response.data.token)
          this.router.navigate(['login']);
        },
        (responseError) => {this.toastrService.error(
                responseError.error,
                'Dogrulama hatasi'
              );
            
        }
      );
    }
  }
}
