
import { Component } from "@angular/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { AgGridAngular } from "@ag-grid-community/angular";

import {
  ColDef,
  ColGroupDef,
  Column,
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
  selector: 'app-aggridcolumn',
  templateUrl: './aggridcolumn.component.html',
  styleUrls: ['./aggridcolumn.component.css']
})
export class AggridcolumnComponent {
  private gridApi!: GridApi<IOlympicData>;

  public columnDefs: ColDef[] = [
    { field: "athlete" },
    { field: "age" },
    { field: "country" },
    { field: "year" },
    { field: "date" },
    { field: "sport" },
    { field: "gold" },
    { field: "silver" },
    { field: "bronze" },
    { field: "total" },
  ];
  public defaultColDef: ColDef = {
    width: 150,
  };
  public rowData!: IOlympicData[];
  public themeClass: string =
    "ag-theme-quartz";

  constructor(private http: HttpClient) {}

  onMedalsFirst() {
    this.gridApi.moveColumns(["gold", "silver", "bronze", "total"], 0);
  }

  onMedalsLast() {
    this.gridApi.moveColumns(["gold", "silver", "bronze", "total"], 6);
  }

  onCountryFirst() {
    this.gridApi.moveColumns(["country"], 0);
  }

  onSwapFirstTwo() {
    this.gridApi.moveColumnByIndex(0, 1);
  }

  onPrintColumns() {
    const cols = this.gridApi.getAllGridColumns();
    const colToNameFunc = (col: Column, index: number) =>
      index + " = " + col.getId();
    const colNames = cols.map(colToNameFunc).join(", ");
    console.log("columns are: " + colNames);
  }

  clearPinned() {
    this.gridApi.applyColumnState({ defaultState: { pinned: null } });
  }

  resetPinned() {
    this.gridApi.applyColumnState({
      state: [
        { colId: "rowNum", pinned: "left" },
        { colId: "athlete", pinned: "left" },
        { colId: "age", pinned: "left" },
        { colId: "total", pinned: "right" },
      ],
      defaultState: { pinned: null },
    });
  }

  pinCountry() {
    this.gridApi.applyColumnState({
      state: [{ colId: "country", pinned: "left" }],
      defaultState: { pinned: null },
    });
  }

  jumpToCol() {
    const value = (document.getElementById("col") as HTMLInputElement).value;
    if (typeof value !== "string" || value === "") {
      return;
    }
    const index = Number(value);
    if (typeof index !== "number" || isNaN(index)) {
      return;
    }
    // it's actually a column the api needs, so look the column up
    const allColumns = this.gridApi.getColumns();
    if (allColumns) {
      const column = allColumns[index];
      if (column) {
        this.gridApi.ensureColumnVisible(column);
      }
    }
  }

  jumpToRow() {
    var value = (document.getElementById("row") as HTMLInputElement).value;
    const index = Number(value);
    if (typeof index === "number" && !isNaN(index)) {
      this.gridApi.ensureIndexVisible(index);
    }
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
