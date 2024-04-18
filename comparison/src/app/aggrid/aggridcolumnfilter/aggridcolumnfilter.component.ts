import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { AgGridAngular } from "@ag-grid-community/angular";
import {
  ColDef,
  ColGroupDef,
  GridApi,
  GridOptions,
  GridReadyEvent,
  IDateFilterParams,
  ModuleRegistry,
  createGrid,
} from "@ag-grid-community/core";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { MenuModule } from "@ag-grid-enterprise/menu";
import { MultiFilterModule } from "@ag-grid-enterprise/multi-filter";
import { SetFilterModule } from "@ag-grid-enterprise/set-filter";
ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  MenuModule,
  MultiFilterModule,
  SetFilterModule,
]);
import { IOlympicData } from "./interfaces";
@Component({
  selector: 'app-aggridcolumnfilter',
  templateUrl: './aggridcolumnfilter.component.html',
  styleUrls: ['./aggridcolumnfilter.component.css']
})
export class AggridcolumnfilterComponent {

  public columnDefs: ColDef[] = [
    { field: "athlete" },
    { field: "age", filter: "agNumberColumnFilter", maxWidth: 100 },
    {
      field: "date",
      filter: "agDateColumnFilter",
      filterParams: filterParams,
    },
    { field: "country", filter: "agSetColumnFilter" },
    { field: "sport", filter: "agMultiColumnFilter" },
    { field: "gold", filter: "agNumberColumnFilter" },
    { field: "silver", filter: "agNumberColumnFilter" },
    { field: "bronze", filter: "agNumberColumnFilter" },
    { field: "total", filter: false },
  ];
  public defaultColDef: ColDef = {
    flex: 1,
    minWidth: 150,
    filter: "agTextColumnFilter",
    menuTabs: ["filterMenuTab"],
  };
  public rowData!: IOlympicData[];
  public themeClass: string =
    "ag-theme-quartz-dark";

  constructor(private http: HttpClient) {}

  onGridReady(params: GridReadyEvent<IOlympicData>) {
    this.http
      .get<
        IOlympicData[]
      >("https://www.ag-grid.com/example-assets/olympic-winners.json")
      .subscribe((data) => (this.rowData = data));
  }
}

var filterParams: IDateFilterParams = {
  comparator: (filterLocalDateAtMidnight: Date, cellValue: string) => {
    var dateAsString = cellValue;
    if (dateAsString == null) return -1;
    var dateParts = dateAsString.split("/");
    var cellDate = new Date(
      Number(dateParts[2]),
      Number(dateParts[1]) - 1,
      Number(dateParts[0]),
    );
    if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
      return 0;
    }
    if (cellDate < filterLocalDateAtMidnight) {
      return -1;
    }
    if (cellDate > filterLocalDateAtMidnight) {
      return 1;
    }
    return 0;
  },
};
