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
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    SidebarComponent,
    FooterComponent,
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

