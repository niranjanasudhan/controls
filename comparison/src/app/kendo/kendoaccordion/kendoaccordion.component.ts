import { Component } from '@angular/core';

@Component({
  selector: 'app-kendoaccordion',
  templateUrl: './kendoaccordion.component.html',
  styleUrls: ['./kendoaccordion.component.css']
})
export class KendoaccordionComponent {
  private baseImageUrl =
  "https://demos.telerik.com/kendo-ui/content/web/panelbar/";

public imageUrl(imageName: string): string {
  return this.baseImageUrl + imageName + ".jpg";
}
}