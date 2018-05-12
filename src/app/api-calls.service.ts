import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class ApiCallsService {
	public baseUrl = 'https://restcountries.eu/rest/v2/';
	constructor(private _http: HttpClient) {
		console.log("Api Call Service Called");
	}

	getSelectedRegion = (regionName) => {
		debugger;
		let response = this._http.get(this.baseUrl+'region/'+regionName);
		return response;
	}

	getSingleCountryName = (singleName) => {
		let response = this._http.get(this.baseUrl+'name/'+singleName+'?fullText=true');
		return response;

	}

	getSelectedCurrency = (currencyCode) => {
		debugger;
		let response = this._http.get(this.baseUrl+'currency/'+currencyCode);
		return response;
	}

	getSelectedLanguage = (languageCode) => {
		debugger;
		let response = this._http.get(this.baseUrl+'lang/'+languageCode);
		return response;
	}



}
