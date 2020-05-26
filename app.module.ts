import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Register/register.component';
import { RegisterService } from './Register/register.service';
import { HttpClientModule } from '@angular/common/http';




import {MaterialModule} from './material.module'


import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomeComponent } from './Home/home.component';

import { NgMarqueeModule } from 'ng-marquee';

import { ChartsModule } from 'ng2-charts';
import { ChartComponent } from './chart/chart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CARDComponent } from './card/card.component';
import { DyChartComponent } from './dy-chart/dy-chart.component'
// import { ChatbotModule } from './chatbot/chatbot.module';
import { ChatDialogComponent } from './chatbot/chat-dialog.component';
import { SpringFormComponent } from './spring-form/spring-form.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';

import { CaptchaJavaComponent } from './captcha-java/captcha-java.component';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';


@NgModule({
  declarations: [
    AppComponent,
   HomeComponent,
    RegisterComponent,
    ChartComponent,
    NavbarComponent,
    CARDComponent,
    DyChartComponent,
    // ChatbotModule
    ChatDialogComponent,
    SpringFormComponent,
    ImageSliderComponent,

    CaptchaJavaComponent,
   
    
    
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    NgbModalModule,
    NgbModule, 
    NgMarqueeModule,
    ChartsModule,
    RecaptchaModule, 
    RecaptchaFormsModule




  ],

  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  providers: [RegisterService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
