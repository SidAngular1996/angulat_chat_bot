import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './Register/register.component';
import { HomeComponent } from './Home/home.component'
import { CARDComponent } from './card/card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChartComponent } from './chart/chart.component';
import { DyChartComponent } from './dy-chart/dy-chart.component';
// import { ChatbotModule } from './chatbot/chatbot.module';
import { ChatDialogComponent } from './chatbot/chat-dialog.component';
import { SpringFormComponent } from './spring-form/spring-form.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { CaptchaJavaComponent } from './captcha-java/captcha-java.component';


export const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },

  { path: 'card', component: CARDComponent },
  { path: 'chart', component: ChartComponent },

  { path: 'dychart', component: DyChartComponent },

  { path: 'chat', component: ChatDialogComponent },

  { path: 'form', component: SpringFormComponent },

  { path: 'slider', component: ImageSliderComponent },

  { path: 'captcha', component: CaptchaJavaComponent }

  // {path: '**', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
