import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { products } from "./products";
import { State } from "@progress/kendo-data-query";
import { HttpClient } from '@angular/common/http';
import { map, tap } from "rxjs/operators";
import { Survey } from "./model";
@Component({
  selector: 'app-kendogrid',
  templateUrl: './kendogrid.component.html',
  styleUrls: ['./kendogrid.component.css']
})
export class KendogridComponent {
  public loading=true;
  public BASE_URL="";
  // public view!: Observable<Athlete[]>;
  public gridData: unknown[] = products;
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
