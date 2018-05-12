import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ApiCallsService } from "../api-calls.service";
import { Location } from '@angular/common';



@Component({
  selector: 'app-country-view',
  templateUrl: './country-view.component.html',
  styleUrls: ['./country-view.component.css']
})
export class CountryViewComponent implements OnInit {
    regionViewResponse: any;
  constructor(private _route:ActivatedRoute, private apiCallsService:ApiCallsService,private location:Location) { 
    console.log("Country View Component called");
  }

  ngOnInit() {
    debugger;
    let regionName = this._route.snapshot.paramMap.get('countryName');
    this.apiCallsService.getSelectedRegion(regionName).subscribe(
      data => {
          console.log("Country View Response");
          debugger;
          this.regionViewResponse = data;
      },
      error => {
        console.log("some error happens in region view");
        console.log(error.errorMessage);

      }
    )
  }


   goBackToPreviousPage = () =>  {
            debugger;
            this.location.back();

        }

}
