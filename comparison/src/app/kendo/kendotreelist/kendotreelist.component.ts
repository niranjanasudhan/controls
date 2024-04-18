import { Component, ViewChild } from "@angular/core";
import {
  FlatBindingDirective,
  SelectableSettings,
} from "@progress/kendo-angular-treelist";
import { fileExcelIcon, filePdfIcon, SVGIcon } from "@progress/kendo-svg-icons";
import { Employee, employees } from "./employees";
import { images } from "./images";
@Component({
  selector: 'app-kendotreelist',
  templateUrl: './kendotreelist.component.html',
  styleUrls: ['./kendotreelist.component.css']
})
export class KendotreelistComponent {
  @ViewChild(FlatBindingDirective) dataBinding: FlatBindingDirective;
  public data: Employee[] = employees;
  public fileExcelIcon: SVGIcon = fileExcelIcon;
  public filePdfIcon: SVGIcon = filePdfIcon;

  public settings: SelectableSettings = {
    mode: "row",
    multiple: true,
    drag: false,
  };

  public selected: any[] = [];

  public onFilter(value: string): void {
    this.dataBinding.filter = {
      logic: "or",
      filters: [
        {
          field: "name",
          operator: "contains",
          value: value,
        },
        {
          field: "title",
          operator: "contains",
          value: value,
        },
        {
          field: "phone",
          operator: "contains",
          value: value,
        },
      ],
    };
    this.dataBinding.rebind();
  }

  public photoURL(dataItem: { imgId: string; gender: string }): string {
    const code: string = dataItem.imgId + dataItem.gender;
    const image: { [Key: string]: string } = images;

    return image[code];
  }
}
