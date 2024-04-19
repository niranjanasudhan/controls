import { Component, ViewChild } from '@angular/core';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import { AgGridAngular } from 'ag-grid-angular'; // AG Grid Component
import { ColDef } from 'ag-grid-community'; // Column Definition Type Interface
@Component({
  selector: 'app-aggridtheme',
  templateUrl: './aggridtheme.component.html',
  styleUrls: ['./aggridtheme.component.css']
})
export class AggridthemeComponent {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  rowData = [
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ];
  
  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "electric" }
  ];
  }
  