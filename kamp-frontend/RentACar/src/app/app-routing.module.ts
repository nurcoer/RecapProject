import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { RentalComponent } from './components/rental/rental.component';
import { AddBrandComponent } from './components/add-brand/add-brand.component';
import{AddColorComponent} from './components/add-color/add-color.component';
import{AddCarComponent} from './components/add-car/add-car.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { PaymentComponent } from './components/payment/payment.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CarComponent },
  { path: 'cars', component: CarComponent },
  { path: 'cars/brand/:brandId', component: CarComponent },
  { path: 'cars/color/:colorId', component: CarComponent },
  { path: 'cars/carDetails/:carId', component: CarDetailComponent },
  { path: 'cars/:filterText', component: CarComponent },
  { path: 'cars/:brand/:color', component: CarComponent },
  { path: 'cars/rental/:carId', component: RentalComponent },
  {path:"payment/:rental",component:PaymentComponent},
  { path:"brandoperations/:brand",component:AddBrandComponent},
  { path:"brandoperations",component:AddBrandComponent},
   { path:"coloroperations/:color",component:AddColorComponent},
  { path:"coloroperations",component:AddColorComponent},
  { path:"caroperations/:car",component:AddCarComponent},
  { path:"caroperations",component:AddCarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
