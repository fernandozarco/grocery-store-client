import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesIndexComponent } from './modules/categories/categories-index/categories-index.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemsIndexComponent } from './modules/items/items-index/items-index.component';
import { ItemsDetailComponent } from './modules/items/items-detail/items-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/header/header.component';
import { CartIndexComponent } from './modules/cart/cart-index/cart-index.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesIndexComponent,
    ItemsIndexComponent,
    ItemsDetailComponent,
    HeaderComponent,
    CartIndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
