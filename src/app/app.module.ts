import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ProductsComponent } from './products/products.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { SharedComponent } from './shared/shared.component';
import { QualityComponent } from './quality/quality.component';
import { DetailsComponent } from './quality/details/details.component';
import { DetailedModule } from './quality/detailed.module';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsComponent,
    ProductsComponent,
    ConvertToSpacesPipe,
    SharedComponent,
    QualityComponent,
    DetailsComponent,
  
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
// Same with app-routing.module.ts 
    RouterModule.forRoot([
      {path: "", pathMatch: "full", redirectTo: "/home"},
      {path: 'home' , component: HomeComponent},
      {path: 'contacts' , component: ContactsComponent},
      {path: 'products' , component: ProductsComponent},
      {path: 'quality' , component: QualityComponent},
      {path: 'details' , component: DetailsComponent}
    ]),
DetailedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
