import { Component } from "@angular/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { AgGridAngular } from "@ag-grid-community/angular";

import {
  ColDef,
  ColGroupDef,
  GridApi,
  GridOptions,
  GridReadyEvent,
  ModuleRegistry,
  createGrid,
} from "@ag-grid-community/core";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { RowGroupingModule } from "@ag-grid-enterprise/row-grouping";
ModuleRegistry.registerModules([ClientSideRowModelModule, RowGroupingModule]);
import { IOlympicData } from "./interfaces";
@Component({
  selector: 'app-aggridgrouping',
  templateUrl: './aggridgrouping.component.html',
  styleUrls: ['./aggridgrouping.component.css']
})
export class AggridgroupingComponent {
  public columnDefs: ColDef[] = [
    { field: "country", rowGroup: true, hide: true },
    { field: "year", rowGroup: true, hide: true },
    { field: "athlete" },
    { field: "sport" },
    { field: "gold" },
    { field: "silver" },
    { field: "bronze" },
  ];
  public defaultColDef: ColDef = {
    flex: 1,
    minWidth: 100,
  };
  public autoGroupColumnDef: ColDef = {
    minWidth: 200,
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
