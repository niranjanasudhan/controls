import { Component } from '@angular/core';
import {
  LoaderType,
  LoaderThemeColor,
  LoaderSize,
} from "@progress/kendo-angular-indicators";
@Component({
  selector: 'app-kendoloader',
  templateUrl: './kendoloader.component.html',
  styleUrls: ['./kendoloader.component.css']
})
export class KendoloaderComponent {
  public loaders = [
    {
      type: <LoaderType>"pulsing",
      themeColor: <LoaderThemeColor>"primary",
      size: <LoaderSize>"medium",
    },
    {
      type: <LoaderType>"infinite-spinner",
      themeColor: <LoaderThemeColor>"secondary",
      size: <LoaderSize>"medium",
    },
    {
      type: <LoaderType>"converging-spinner",
      themeColor: <LoaderThemeColor>"info",
      size: <LoaderSize>"medium",
    },
  ];
}
