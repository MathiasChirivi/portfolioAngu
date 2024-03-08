import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppMainComponent } from './components/app-main/app-main.component';
import { AppHomeComponent } from './components/app-home/app-home.component';
import { AppMyWorkComponent } from './components/app-my-work/app-my-work.component';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppMainComponent,
    AppHomeComponent,
    AppMyWorkComponent
  ],
  imports: [
    // CarouselModule,
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
