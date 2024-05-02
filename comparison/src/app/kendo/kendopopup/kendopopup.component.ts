import { Component, ElementRef, HostListener, ViewChild, ViewEncapsulation } from '@angular/core';
import { Report } from './model';
import { FormGroup, FormControl } from "@angular/forms";
@Component({
  selector: 'app-kendopopup',
  templateUrl: './kendopopup.component.html',
  styleUrls: ['./kendopopup.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class KendopopupComponent {
  public myGroup:any;
   @ViewChild("anchor", { read: ElementRef }) public anchor!: ElementRef;
  @ViewChild("popup", { read: ElementRef }) public popup!: ElementRef;
  @HostListener("document:keydown", ["$event"])

  public keydown(event: KeyboardEvent): void {
    if (event.code === "Escape") {
      this.onToggle(false);
    }
  }

  @HostListener("document:click", ["$event"])
  public documentClick(event: KeyboardEvent): void {
    if(event.target){
    if (!this.contains(event.target|| '{}')) {
      this.onToggle(false);
    }
  }
  }
  public toggleText = "Hide";
  public show = false;
  public opened = false;
  public opened1 = false;
  public isResizable = true;

  public openClose(isOpened: boolean): void {
    this.opened = isOpened;
  }

  public openClose1(isOpened: boolean): void {
    this.opened1 = isOpened;
  }

  public onToggle(show?: boolean): void {
    this.show = show !== undefined ? show : !this.show;
    this.toggleText = this.show ? "Hide" : "Show";
  }

  private contains(target:EventTarget): boolean {
    return (
      this.anchor.nativeElement.contains(target) ||
      (this.popup ? this.popup.nativeElement.contains(target) : false)
    );
  }
  public gridData: Report[] = [
    {
      ReferenceNo:"AMR/INA/2024/01",
      InspectionDate: "28/01/2024",
      Vessel: "Alpha",
      Port: "Singapore",
      Remarks: "",
    },
    {
      ReferenceNo:"AMR/INA/2024/33",
      InspectionDate: "30/01/2024",
      Vessel: "Ebba",
      Port: "Dubai",
      Remarks: "",
    },
    {
      ReferenceNo:"AMR/INA/2024/33",
      InspectionDate: "30/01/2024",
      Vessel: "Alpha",
      Port: "Thailand",
      Remarks: "",
    },
    {
      ReferenceNo:"AMR/INA/2024/33",
      InspectionDate: "30/01/2024",
      Vessel: "Ebba",
      Port: "Sreelanka",
      Remarks: "",
    },
    {
      ReferenceNo:"AMR/INA/2024/33",
      InspectionDate: "30/01/2024",
      Vessel: "Ebba",
      Port: "Dubai",
      Remarks: "",
    },
  
  ]

  public form: FormGroup = new FormGroup({
    name: new FormControl(),
    pageheading: new FormControl(),
    pagename: new FormControl(),
    iconname: new FormControl(),
    from: new FormControl(),
    to: new FormControl(),
    applicableto: new FormControl(),
    pagetype: new FormControl(),
    fromversion: new FormControl(),
    toversion: new FormControl(),
    navigationurl: new FormControl(),
    menuname: new FormControl(),
    active: new FormControl(),
    leafnode: new FormControl(),
    visible: new FormControl(),
    viewonly: new FormControl(),
  });

  public applicabletolist: Array<string> = [
    "Boston",
    "Chicago",
    "Houston",
    "Los Angeles",
    "Miami",
    "New York",
    "Philadelphia",
    "San Francisco",
    "Seattle",
  ];
  public pagetypelist: Array<string> = [
    "Boston",
    "Chicago",
    "Houston",
    "Los Angeles",
    "Miami",
    "New York",
    "Philadelphia",
    "San Francisco",
    "Seattle",
  ];
  public fromversion: Array<number> = [
    1,2,3,4,5,6,7,8,9
    
  ];
  public toversion: Array<number> = [
    1,2,3,4,5,6,7,8,9
    
  ];

//   myGroup = new FormGroup({
//     firstName: new FormControl()
// });
}