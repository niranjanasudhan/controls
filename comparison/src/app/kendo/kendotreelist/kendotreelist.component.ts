import { Component, ViewChild } from "@angular/core";
import {
  FlatBindingDirective,
  SelectableSettings,
} from "@progress/kendo-angular-treelist";
import {  plusIcon, minusIcon, SVGIcon } from "@progress/kendo-svg-icons";
import { Employee, employees } from "./employees";
import { images } from "./images";

@Component({
  selector: 'app-kendotreelist',
  templateUrl: './kendotreelist.component.html',
  styleUrls: ['./kendotreelist.component.css']
})
export class KendotreelistComponent {
  public plusIcon: SVGIcon = plusIcon;
  public minusIcon: SVGIcon = minusIcon;

  public expandedKeys: any[] = ["0", "1"];

  public checkedKeys: any[] = ["0_1"];

  public data: any[] = [
    {
      text: "Heading 1",
      items: [
        { text: "Item 1",
          items: [
            { text: "Sub-item 1" },
            { text: "Sub-item 2" },
            { text: "Sub-item 3" },
            { text: "Sub-item 4" },
          ],
        },
        { text: "Item 2",
          items: [
            { text: "Sub-item 1" },
            { text: "Sub-item 2" },
            { text: "Sub-item 3" },
          ],
       },
      ],
    },
    {
      text: "Heading 2",
      items: [
        { text: "Item 1" },
        { text: "Item 2" },
        { text: "Item 3" },
      ],
    },
  ];

  
  // @ViewChild(FlatBindingDirective) dataBinding: FlatBindingDirective;
  // public data: Employee[] = employees;
  // public fileExcelIcon: SVGIcon = fileExcelIcon;
  // public filePdfIcon: SVGIcon = filePdfIcon;

  // public settings: SelectableSettings = {
  //   mode: "row",
  //   multiple: true,
  //   drag: false,
  // };

  // public selected: any[] = [];

  // public onFilter(value: string): void {
  //   this.dataBinding.filter = {
  //     logic: "or",
  //     filters: [
  //       {
  //         field: "name",
  //         operator: "contains",
  //         value: value,
  //       },
  //       {
  //         field: "title",
  //         operator: "contains",
  //         value: value,
  //       },
  //       {
  //         field: "phone",
  //         operator: "contains",
  //         value: value,
  //       },
  //     ],
  //   };
  //   this.dataBinding.rebind();
  // }

  // public photoURL(dataItem: { imgId: string; gender: string }): string {
  //   const code: string = dataItem.imgId + dataItem.gender;
  //   const image: { [Key: string]: string } = images;

  //   return image[code];
  // }
}
