import {registerLocaleData} from "@angular/common";
import { HttpClientModule } from  "@angular/common/http";
import * as fr from '@angular/common/locales/fr';

import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { CarousselComponent } from './caroussel/caroussel.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import {ContactComponent} from "./contact/contact.component";
import {ContactListComponent} from "./contact-list/contact-list.component";
import {ContactFormComponent} from "./contactForm/contactForm.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { GraphComponent } from './graph/graph.component';
import { ListeDestinationComponent } from './liste-destination/liste-destination.component';
import { DestinationComponent } from './destination/destination.component';
import { UserIconPipe } from './pipe/user-icon.pipe';
import { DestinationDetailComponent } from './destination-detail/destination-detail.component';
import { SearchDestinationPipe } from "./pipe/search-destination.pipe";
import { SearchDestinationComponent } from './search-destination/search-destination.component';
import { ContinentDestinationsComponent } from "./continent-destinations/continent-destinations.component";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    CarousselComponent,
    SidebarComponent,
    FooterComponent,
    ContactComponent,
    ContactListComponent,
    ContactFormComponent,
    GraphComponent,
    ListeDestinationComponent,
    DestinationComponent,
    UserIconPipe,
    DestinationDetailComponent,
     SearchDestinationPipe,
     SearchDestinationComponent,
     ContinentDestinationsComponent



  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue:'fr-FR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { constructor() {
  registerLocaleData(fr.default);
}}

