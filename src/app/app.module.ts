import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';


import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


import { ContactComponent } from './pages/contact/contact.component';
import { GdprComponent } from './pages/gdpr/gdpr.component';
import { ConfidentialityComponent } from './pages/confidentiality/confidentiality.component';
import { CookiesComponent } from './pages/cookies/cookies.component';
import { TermsComponent } from './pages/terms/terms.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { PricesComponent } from './pages/prices/prices.component';
import { WhatsappComponent } from './components/whatsapp/whatsapp.component';
import { SliderComponent } from './pages/home/slider/slider.component';
import { ServicesComponent } from './pages/home/services/services.component';
import { ContabilitateSrlComponent } from './pages/contabilitate-srl/contabilitate-srl.component';
import { SalarizareResurseUmaneComponent } from './pages/salarizare-resurse-umane/salarizare-resurse-umane.component';
import { ServiciiConsultantaFiscalaContabilaComponent } from './pages/servicii-consultanta-fiscala-contabila/servicii-consultanta-fiscala-contabila.component';
import { ServiciiContabilitatePfaIiIfComponent } from './pages/servicii-contabilitate-pfa-ii-if/servicii-contabilitate-pfa-ii-if.component';
import { ServicesSidebarComponent } from './components/layout/services-sidebar/services-sidebar.component';
import { QuoteSidebarComponent } from './components/layout/quote-sidebar/quote-sidebar.component';
import { TestimonialsComponent } from './components/layout/testimonials/testimonials.component';
import { QuickContactFormComponent } from './components/quick-contact-form/quick-contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuickActionsComponent } from './components/quick-actions/quick-actions.component';

  

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,

    HomeComponent,
    NotFoundComponent,

    ContactComponent,
    GdprComponent,
    ConfidentialityComponent,
    CookiesComponent,
    TermsComponent,
    ThankYouComponent,
    PricesComponent,
    WhatsappComponent,
    SliderComponent,
    ServicesComponent,
    ContabilitateSrlComponent,
    SalarizareResurseUmaneComponent,
    ServiciiConsultantaFiscalaContabilaComponent,
    ServiciiContabilitatePfaIiIfComponent,
    ServicesSidebarComponent,
    QuoteSidebarComponent,
    TestimonialsComponent,
    QuickContactFormComponent,
    QuickActionsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),

    
  ],
  exports: [
    QuickContactFormComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
