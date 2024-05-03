import { Component } from '@angular/core';
import { SelectEvent } from "@progress/kendo-angular-layout";
import { SVGIcon, chevronDownIcon } from "@progress/kendo-svg-icons";



@Component({
  selector: 'app-kendotab',
  templateUrl: './kendotab.component.html',
  styleUrls: ['./kendotab.component.css']
})
export class KendotabComponent {
  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }
  public downSVG: SVGIcon = chevronDownIcon;
  data = [
    { text: "option 1" },
    { text: "option 2" },
    { text: "option 3" },
    { text: "option 4" },
  ];
}
