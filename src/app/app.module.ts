// noinspection AngularInvalidImportedOrDeclaredSymbol

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { CategoriesComponent } from './categories/categories.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import {NgOptimizedImage} from "@angular/common";
import { HttpClientModule} from "@angular/common/http";


@NgModule({
  "bootstrap": [AppComponent],
  "declarations": [
    AppComponent,
    SliderComponent,
    HomeComponent,
    HeaderComponent,
    CategoriesComponent,
    ContactComponent,
    AboutComponent,


  ],
  "imports": [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    HttpClientModule
  ],
  "exports":[
    AppComponent,
    SliderComponent,
    HomeComponent,
    HeaderComponent,
    CategoriesComponent,
    ContactComponent,
    AboutComponent
  ],

  "providers": []
})
export class AppModule { }
