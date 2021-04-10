import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { RentalComponent } from './components/rental/rental.component';
import { AddBrandComponent } from './components/add-brand/add-brand.component';
import{AddColorComponent} from './components/add-color/add-color.component';
import{AddCarComponent} from './components/add-car/add-car.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { PaymentComponent } from './components/payment/payment.component';
import {LoginComponent } from './components/authOperations/login/login.component';
import {RegisterComponent } from './components/authOperations/register/register.component';
import {LoginGuard} from './guards/login.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CarComponent },
  { path: 'cars', component: CarComponent },
  //  { path: 'cars/:user', component: CarComponent },
  { path: 'cars/brand/:brandId', component: CarComponent },
  { path: 'cars/color/:colorId', component: CarComponent },
  { path: 'cars/carDetails/:carId', component: CarDetailComponent },
  { path: 'cars/:filterText', component: CarComponent },
  { path: 'cars/:brand/:color', component: CarComponent },
  { path: 'cars/rental/:carId', component: RentalComponent },
  {path:"payment/:rental",component:PaymentComponent,canActivate:[LoginGuard]},
  { path:"brandoperations/:brand",component:AddBrandComponent,canActivate:[LoginGuard]},
  { path:"brandoperations",component:AddBrandComponent,canActivate:[LoginGuard]},
  { path:"coloroperations/:color",component:AddColorComponent,canActivate:[LoginGuard]},
  { path:"coloroperations",component:AddColorComponent,canActivate:[LoginGuard]},
  { path:"caroperations/:car",component:AddCarComponent,canActivate:[LoginGuard]},
  { path:"caroperations",component:AddCarComponent, canActivate:[LoginGuard]},
  { path:"login",component:LoginComponent},
  {path:"register" , component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
