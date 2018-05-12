import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ApiCallsService } from "../api-calls.service";
import { Location } from '@angular/common';



@Component({
  selector: 'app-language-view',
  templateUrl: './language-view.component.html',
  styleUrls: ['./language-view.component.css']
})
export class LanguageViewComponent implements OnInit {
  languageViewResponse: Object;

  constructor(private _route: ActivatedRoute, private apiCallsService: ApiCallsService,private location:Location) {
    console.log("Language View Component called");

  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      let languageCode = params['languageCode'];
      this.languageViewResponse = null;
      this.apiCallsService.getSelectedLanguage(languageCode).subscribe(
        data => {
          console.log("Language View Response");
          debugger;
          this.languageViewResponse = data;
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
