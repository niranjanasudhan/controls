import { Component } from '@angular/core';
import { ButtonThemeColor } from '@progress/kendo-angular-buttons';

@Component({
  selector: 'app-kendobutton',
  templateUrl: './kendobutton.component.html',
  styleUrls: ['./kendobutton.component.css']
})
export class KendobuttonComponent {
  public themeColors: ButtonThemeColor[] = [
    "base",
    "primary",
    "secondary",
    "tertiary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
    "inverse",
  ];
}
