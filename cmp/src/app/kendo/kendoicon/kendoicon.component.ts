import { Component } from '@angular/core';
import { cameraIcon } from "@progress/kendo-svg-icons";
@Component({
  selector: 'app-kendoicon',
  templateUrl: './kendoicon.component.html',
  styleUrls: ['./kendoicon.component.css']
})
export class KendoiconComponent {
  icons = { cameraIcon };
}
