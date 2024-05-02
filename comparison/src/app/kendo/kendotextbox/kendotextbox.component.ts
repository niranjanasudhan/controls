import { Component  } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SVGIcon, chevronDownIcon } from "@progress/kendo-svg-icons";

@Component({
  selector: 'app-kendotextbox',
  templateUrl: './kendotextbox.component.html',
  styleUrls: ['./kendotextbox.component.css']
})
export class KendotextboxComponent  {
  emailUsernameControl = new FormControl('', [Validators.required]);

  getPlaceholder(value: any): string {
    return value + ' *';
  }  

  public folderSVG: SVGIcon = chevronDownIcon;
  public areaList: Array<string> = [
    "Boston",
    "Chicago",
    "Houston",
    "Los Angeles",
    // "Miami",
    // "New York",
    // "Philadelphia",
    // "San Francisco",
    // "Seattle",
  ];

 
  selectedArea: string = ''; 
  isOptionSelected: boolean = true; 

  validateSelection() {
    this.isOptionSelected = !!this.selectedArea;
  }



  public value: Date = new Date();
  public range = { start:  new Date(), end: new Date() };

  selectedDate: Date | null = null; 
  isDateSelected: boolean = true; 

  validateDateSelection() {
    this.isDateSelected = !!this.selectedDate;
  }
}
