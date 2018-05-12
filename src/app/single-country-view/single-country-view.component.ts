import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ApiCallsService } from "../api-calls.service";
import { Location } from '@angular/common';




@Component({
  selector: 'app-single-country-view',
  templateUrl: './single-country-view.component.html',
  styleUrls: ['./single-country-view.component.css']
})
export class SingleCountryViewComponent implements OnInit {
    singleViewResponse: any;

  constructor(private _route: ActivatedRoute, private apiCallsService: ApiCallsService, private location:Location) {
    console.log("Single Country View Component called");

  }

  ngOnInit() {
    let singleName = this._route.snapshot.paramMap.get('singleName');
    this.apiCallsService.getSingleCountryName(singleName).subscribe(
      data =>{
         console.log("Country View Response");
          debugger;
          this.singleViewResponse = data;

      },
      error => {
         console.log("some error happens in  single country view");
        console.log(error.errorMessage);
      }
    )

  }

  goBackToPreviousPage = () =>  {
            debugger;
            this.location.back();

        }

}
