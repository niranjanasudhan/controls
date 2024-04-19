import { Component } from '@angular/core';
import { AgGridAngular } from "@ag-grid-community/angular";
// NOTE: Angular CLI does not support component CSS imports: angular-cli/issues/23273

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
import { CsvExportModule } from "@ag-grid-community/csv-export";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { ExcelExportModule } from "@ag-grid-enterprise/excel-export";
import { MenuModule } from "@ag-grid-enterprise/menu";
ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  CsvExportModule,
  ExcelExportModule,
  MenuModule,
]);
import { IOlympicData } from "./interfaces";




ModuleRegistry.registerModules([ClientSideRowModelModule, CsvExportModule]);





@Component({
  selector: 'app-aggridimportexport',
  templateUrl: './aggridimportexport.component.html',
  styleUrls: ['./aggridimportexport.component.css']
})
export class AggridimportexportComponent {
  private gridApi!: GridApi;

  public defaultColDef: ColDef = {
    editable: true,
    minWidth: 100,
    flex: 1,
  };
  public popupParent: HTMLElement | null = document.body;
  public columnDefs: ColDef[] = [
    { field: "make" },
    { field: "model" },
    { field: "price" },
  ];
  public rowData: any[] | null = [
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxster", price: 72000 },
  ];
  public themeClass: string =
    "ag-theme-quartz";

  onBtnExport() {
    this.gridApi.exportDataAsCsv();
  }

  onBtnUpdate() {
    (document.querySelector("#csvResult") as any).value =
      this.gridApi.getDataAsCsv();
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
  }






  private gridApi1!: GridApi<IOlympicData>;

  public columnDefs1: (ColDef | ColGroupDef)[] = [
    {
      headerName: "Group A",
      children: [
        { field: "athlete", minWidth: 200 },
        { field: "country", minWidth: 200 },
      ],
    },
    {
      headerName: "Group B",
      children: [
        { field: "sport", minWidth: 150 },
        { field: "gold" },
        { field: "silver" },
        { field: "bronze" },
        { field: "total" },
      ],
    },
  ];
  public defaultColDef1: ColDef = {
    filter: true,
    minWidth: 100,
    flex: 1,
  };
  public rowData1!: IOlympicData[];


  constructor(private http: HttpClient) {}

  onBtExport() {
    this.gridApi1.exportDataAsExcel();
  }

  onGridReady1(params: GridReadyEvent<IOlympicData>) {
    this.gridApi1 = params.api;

    this.http
      .get<
        IOlympicData[]
      >("https://www.ag-grid.com/example-assets/small-olympic-winners.json")
      .subscribe((data) => {
        this.rowData1 = data;
      });
  }













}


