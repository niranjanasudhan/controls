import { Component } from '@angular/core';
import { SVGIcon, folderIcon } from "@progress/kendo-svg-icons";
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
//button
public folderSVG: SVGIcon = folderIcon;
public onButtonClick(): void {
  console.log("click");
}
}
