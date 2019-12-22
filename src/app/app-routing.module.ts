import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { MainComponent } from './main/main.component';




const routes: Routes = [
  {path:"home", component:HomeComponent}, 
  {path:"contact-us", component:ContactUsComponent},
  {path:"about-us", component:AboutUsComponent},
  {path:"services", component:ServicesComponent},
  {path:"main", component:MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
