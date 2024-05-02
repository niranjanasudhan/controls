import { Component } from '@angular/core';
import {
  checkIcon,
  eyeIcon,
  fileAddIcon,
  paperclipIcon,
  userIcon,
} from "@progress/kendo-svg-icons";
import { StepType } from "@progress/kendo-angular-layout";

@Component({
  selector: 'app-kendowizard',
  templateUrl: './kendowizard.component.html',
  styleUrls: ['./kendowizard.component.css']
})
export class KendowizardComponent {
  public current1 = -1;

  public steps1 = [
    { index: 1, label: "General Details", isValid: true, stepcount: 'Step 1'},
    { index: 2, label: "Vessel Details", isValid: false, stepcount: 'Step 2' },
    { index: 3, label: "Port Details", isValid: true, optional: true, stepcount: 'Step 3' },
    { index: 4, label: "Security Questions", isValid: true, stepcount: 'Step 4' },
  ];


  public current = 2;

  public steps = [
    { index: 1, label: "General Details", isValid: true, stepcount: 'Step 1'},
    { index: 2, label: "Vessel Details", isValid: false, stepcount: 'Step 2' },
    { index: 3, label: "Port Details", isValid: true, optional: true, stepcount: 'Step 3' },
    { index: 4, label: "Security Questions", isValid: true, stepcount: 'Step 4' },
  ];

  public current2 = 3;

  public steps2 = [
    { index: 1, label: "General Details", isValid: true, stepcount: 'Step 1'},
    { index: 2, label: "Vessel Details", isValid: false, stepcount: 'Step 2' },
    { index: 3, label: "Port Details", isValid: true, optional: true, stepcount: 'Step 3' },
    { index: 4, label: "Security Questions", isValid: true, stepcount: 'Step 4' },
  ];

  public current3 = 3;

  public steps3 = [
    { index: 1, label: "General Details", stepcount: 'Step 1'},
    { index: 2, label: "Vessel Details", stepcount: 'Step 2' },
    { index: 3, label: "Port Details", stepcount: 'Step 3' },
    { index: 4, label: "Security Questions", stepcount: 'Step 4'},
  ];
}

// <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16" fill="none">
// <path d="M3.8 12.55H8M2.12 1H9.68C10.072 1 10.2681 1 10.4178 1.0763C10.5495 1.14341 10.6566 1.25049 10.7237 1.38221C10.8 1.53194 10.8 1.72796 10.8 2.12V3.57216C10.8 3.91459 10.8 4.0858 10.7613 4.24692C10.727 4.38978 10.6705 4.52634 10.5937 4.6516C10.5071 4.79288 10.3861 4.91395 10.1439 5.15608L8.09196 7.20804C7.81475 7.48525 7.67614 7.62386 7.62421 7.78369C7.57853 7.92428 7.57853 8.07572 7.62421 8.21631C7.67614 8.37614 7.81475 8.51475 8.09196 8.79196L10.1439 10.8439C10.3861 11.0861 10.5071 11.2071 10.5937 11.3484C10.6705 11.4737 10.727 11.6102 10.7613 11.7531C10.8 11.9142 10.8 12.0854 10.8 12.4278V13.88C10.8 14.272 10.8 14.4681 10.7237 14.6178C10.6566 14.7495 10.5495 14.8566 10.4178 14.9237C10.2681 15 10.072 15 9.68 15H2.12C1.72796 15 1.53194 15 1.38221 14.9237C1.25049 14.8566 1.14341 14.7495 1.0763 14.6178C1 14.4681 1 14.272 1 13.88V12.4278C1 12.0854 1 11.9142 1.03868 11.7531C1.07298 11.6102 1.12954 11.4737 1.2063 11.3484C1.29288 11.2071 1.41395 11.0861 1.65608 10.8439L3.70804 8.79196C3.98525 8.51475 4.12386 8.37614 4.17579 8.21631C4.22147 8.07572 4.22147 7.92428 4.17579 7.78369C4.12386 7.62386 3.98525 7.48525 3.70804 7.20804L1.65608 5.15608C1.41395 4.91395 1.29288 4.79288 1.2063 4.6516C1.12954 4.52634 1.07298 4.38978 1.03868 4.24692C1 4.0858 1 3.91459 1 3.57216V2.12C1 1.72796 1 1.53194 1.0763 1.38221C1.14341 1.25049 1.25049 1.14341 1.38221 1.0763C1.53194 1 1.72796 1 2.12 1Z" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
// </svg>