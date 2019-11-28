import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ClientsComponent } from './clients/clients.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { NewsComponent } from './news/news.component';
import { FloatBannerComponent } from './float-banner/float-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroComponent,
    AboutUsComponent,
    ServicesComponent,
    ExperiencesComponent,
    ClientsComponent,
    ContactUsComponent,
    FooterComponent,
    NewsComponent,
    FloatBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot([]),
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AnimateOnScrollModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
