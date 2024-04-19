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
ModuleRegistry.registerModules([ClientSideRowModelModule]);
import { IOlympicData } from "./interfaces";
@Component({
  selector: 'app-aggridselection',
  templateUrl: './aggridselection.component.html',
  styleUrls: ['./aggridselection.component.css']
})
export class AggridselectionComponent {
  private gridApi!: GridApi<IOlympicData>;

  public columnDefs: ColDef[] = [
    { field: "athlete", minWidth: 150 },
    { field: "age", maxWidth: 90 },
    { field: "country", minWidth: 150 },
    { field: "year", maxWidth: 90 },
    { field: "date", minWidth: 150 },
    { field: "sport", minWidth: 150 },
    { field: "gold" },
    { field: "silver" },
    { field: "bronze" },
    { field: "total" },
  ];
  public defaultColDef: ColDef = {
    flex: 1,
    minWidth: 100,
  };
  public rowSelection: "single" | "multiple" = "single";
  public rowData!: IOlympicData[];
  public themeClass: string =
    "ag-theme-quartz";

  constructor(private http: HttpClient) {}

  onSelectionChanged() {
    const selectedRows = this.gridApi.getSelectedRows();
    (document.querySelector("#selectedRows") as any).innerHTML =
      selectedRows.length === 1 ? selectedRows[0].athlete : "";
  }

  onGridReady(params: GridReadyEvent<IOlympicData>) {
    this.gridApi = params.api;

    this.http
      .get<
        IOlympicData[]
      >("https://www.ag-grid.com/example-assets/olympic-winners.json")
      .subscribe((data) => (this.rowData = data));
  }
}
 
