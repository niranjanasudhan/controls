import { Component } from '@angular/core';
import {NgFor} from '@angular/common';
import {CdkAccordionModule} from '@angular/cdk/accordion';
@Component({
  selector: 'app-materialaccordion',
  templateUrl: './materialaccordion.component.html',
  styleUrls: ['./materialaccordion.component.css']
})
export class MaterialaccordionComponent {
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  expandedIndex = 0;
}

