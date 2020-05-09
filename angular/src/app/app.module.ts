import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './navpages/auth/auth.component';
import { Page0Component } from './navpages/page0/page0.component';
import { Page1Component } from './navpages/page1/page1.component';
import { MainComponent } from './navpages/main/main.component';
import { SearchComponent } from './navpages/search/search.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { AreaChartComponent } from './navpages/page0/area-chart/area-chart.component';
import { StartChartComponent } from './navpages/page0/area-chart/start-chart/start-chart.component';
import { DetailChartComponent } from './navpages/page0/area-chart/detail-chart/detail-chart.component';
import { HomeComponent } from './navpages/home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarComponent } from './material-components/calendar/calendar.component';
import {MaterialModule} from './material-module';
import {MatNativeDateModule} from '@angular/material/core';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    Page0Component,
    Page1Component,
    MainComponent,
    SearchComponent,
    NavbarComponent,
    AreaChartComponent,
    StartChartComponent,
    DetailChartComponent,
    HomeComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
