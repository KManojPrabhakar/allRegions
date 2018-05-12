import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RegionsViewComponent } from './regions-view/regions-view.component';
import { CountryViewComponent } from './country-view/country-view.component';
import { SingleCountryViewComponent } from './single-country-view/single-country-view.component';

import { HttpClientModule } from "@angular/common/http";


import { RouterModule, Routes } from '@angular/router';
import { ApiCallsService } from "./api-calls.service";
import { CurrencyViewComponent } from './currency-view/currency-view.component';
import { LanguageViewComponent } from './language-view/language-view.component';



const appRoutes: Routes = [
	{ path: 'regions-view', component: RegionsViewComponent, pathMatch: 'full' },
	{ path: '', redirectTo: 'regions-view', pathMatch: 'full' },
	{ path: 'regions-view/:countryName', component: CountryViewComponent },
	{ path: 'single-view/:singleName', component: SingleCountryViewComponent },
	{ path: 'currency-view/:currencyCode', component: CurrencyViewComponent },
	{ path: 'language-view/:languageCode', component: LanguageViewComponent },


]

@NgModule({
	declarations: [
		AppComponent,
		RegionsViewComponent,
		CountryViewComponent,
		SingleCountryViewComponent,
		CurrencyViewComponent,
		LanguageViewComponent,
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(appRoutes),
		HttpClientModule

	],
	providers: [ApiCallsService],
	bootstrap: [AppComponent]
})
export class AppModule { }
