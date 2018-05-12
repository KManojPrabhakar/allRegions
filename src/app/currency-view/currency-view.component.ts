import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ApiCallsService } from "../api-calls.service";
import { Location } from '@angular/common';


@Component({
  selector: 'app-currency-view',
  templateUrl: './currency-view.component.html',
  styleUrls: ['./currency-view.component.css']
})
export class CurrencyViewComponent implements OnInit {
  currencyViewresponse: Object;

  constructor(private _route: ActivatedRoute, private apiCallsService: ApiCallsService, private location:Location) {
    console.log("Currency View Component called");

  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      let currencyCode = params['currencyCode'];
      this.apiCallsService.getSelectedCurrency(currencyCode).subscribe(
        data => {
          console.log("Country View Response");
          debugger;
          this.currencyViewresponse = data;
        },
        error => {
          console.log("some error happens in region view");
          console.log(error.errorMessage);
        }
      )

    })



    
  }

   goBackToPreviousPage = () =>  {
            debugger;
            this.location.back();

        }


}
