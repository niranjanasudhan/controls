import { Component } from '@angular/core';
import { SVGIcon, trashIcon , infoSolidIcon} from "@progress/kendo-svg-icons";


@Component({
  selector: 'app-kendotooltip',
  templateUrl: './kendotooltip.component.html',
  styleUrls: ['./kendotooltip.component.css']
})
export class KendotooltipComponent {
  //button
  public deleteSVG: SVGIcon = trashIcon;
  public infoSVG: SVGIcon = infoSolidIcon;

  htmlContent: string = `<span style='color: red;'>Your HTML content goes here</span>`;
}
