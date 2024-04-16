import { Component } from '@angular/core';
import {
  bookIcon,
  eyeIcon,
  fileAddIcon,
  paperclipIcon,
  userIcon,
} from "@progress/kendo-svg-icons";
@Component({
  selector: 'app-kendowizard',
  templateUrl: './kendowizard.component.html',
  styleUrls: ['./kendowizard.component.css']
})
export class KendowizardComponent {
  public current = 1;

  public steps = [
    { label: "Personal Info", svgIcon: userIcon },
    { label: "Education", svgIcon: bookIcon },
    { label: "Attachments", svgIcon: paperclipIcon, optional: true },
    { label: "Preview", svgIcon: eyeIcon },
    { label: "Submit", svgIcon: fileAddIcon },
  ];
}