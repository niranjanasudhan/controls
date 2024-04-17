import { Component } from '@angular/core';
import { SelectEvent } from "@progress/kendo-angular-layout";
@Component({
  selector: 'app-kendotab',
  templateUrl: './kendotab.component.html',
  styleUrls: ['./kendotab.component.css']
})
export class KendotabComponent {
  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }
}
