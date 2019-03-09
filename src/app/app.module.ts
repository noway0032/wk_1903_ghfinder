import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { HistoryComponent } from './pages/history/history.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LoadingSpinnerComponent } from './core/loading-spinner/loading-spinner.component';
import { SearchResultsComponent } from './elements/search-results/search-results.component';
import { SearchBarExtendedComponent } from './elements/search-bar-extended/search-bar-extended.component';
import { SearchBarDefaultComponent } from './elements/search-bar-default/search-bar-default.component';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';
import { SearchResultsRowComponent } from './elements/search-results-row/search-results-row.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {SearchComponent} from './pages/search/search.component';
import { SearchBarOrderComponent } from './elements/search-bar-order/search-bar-order.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HistoryComponent,
    SearchResultsComponent,
    SearchBarExtendedComponent,
    SearchBarDefaultComponent,
    PageNotFoundComponent,
    LoadingSpinnerComponent,
    Page1Component,
    Page2Component,
    SearchComponent,
    SearchResultsRowComponent,
    SearchBarOrderComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
