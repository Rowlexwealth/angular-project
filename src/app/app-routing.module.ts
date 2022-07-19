import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ProductsComponent } from './products/products.component';
import { QualityComponent } from './quality/quality.component';
import { DetailsComponent } from './quality/details/details.component';
import { DetailGuard } from './quality/detail.guard';


const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "/home"},
  {path: 'home' , component: HomeComponent},
  {path: 'contacts' , component: ContactsComponent},
  {path: 'products' , component: ProductsComponent},
  {path: 'quality' , component: QualityComponent},
  {
    path: 'details/:id' ,
    canActivate: [DetailGuard],
    component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
