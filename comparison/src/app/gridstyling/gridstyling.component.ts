import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { products } from "./products";
import { State } from "@progress/kendo-data-query";
import { HttpClient } from '@angular/common/http';
import { map, tap } from "rxjs/operators";
import { Survey } from "./model";
@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-gridstyling',
  templateUrl: './gridstyling.component.html',
  styleUrls: ['./gridstyling.component.css']
})
export class GridstylingComponent {
  public loading=true;
  public BASE_URL="";
  // public view!: Observable<Athlete[]>;
  public gridData1: unknown[] = products;
  public gridData: Survey[] = [
    {
      Name:"Certificates",
      NoSurveyScheuled: "23",
      Expired: "15",
      In30days: "11",
      In31to60days: "",
      In61to90days: "",
      Commenced: "",
      NullCertificate: "41",
    },
    {
      Name:"Surveys",
      NoSurveyScheuled: "12",
      Expired: "29",
      In30days: "10",
      In31to60days: "",
      In61to90days: "12",
      Commenced: "14",
      NullCertificate: "",
    },
    {
      Name:"Conditions",
      NoSurveyScheuled: "09",
      Expired: "22",
      In30days: "26",
      In31to60days: "13",
      In61to90days: "",
      Commenced: "16",
      NullCertificate: "",
    },
    {
      Name:"Memos/Remarks",
      NoSurveyScheuled: "19",
      Expired: "",
      In30days: "19",
      In31to60days: "",
      In61to90days: "",
      Commenced: "23",
      NullCertificate: "",
    },
    
   
  ];
  
  constructor(
    private router: Router,private http:HttpClient
  ) { }

  ngOnInit() {
    // this.BASE_URL="https://www.ag-grid.com/example-assets/olympic-winners.json";
    // const queryStr = ``;
    // this.view=   this.http.get(`${this.BASE_URL}`     
    //   ).pipe(
    //   map((response: any) => <Athlete[]>response),
    //   tap(() => (this.loading = false))
    // );
  }
}
