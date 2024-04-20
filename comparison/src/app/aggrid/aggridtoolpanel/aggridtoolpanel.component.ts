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
  SideBarDef,
  createGrid,
} from "@ag-grid-community/core";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { ColumnsToolPanelModule } from "@ag-grid-enterprise/column-tool-panel";
import { FiltersToolPanelModule } from "@ag-grid-enterprise/filter-tool-panel";
import { SetFilterModule } from "@ag-grid-enterprise/set-filter";
ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  ColumnsToolPanelModule,
  FiltersToolPanelModule,
  SetFilterModule,
]);
import { IOlympicData } from "./interfaces";
import { CustomStatsToolPanel } from "./custom-stats-tool-panel.component";
import { CellValueChangedEvent } from "ag-grid-enterprise";

@Component({
  selector: 'app-aggridtoolpanel',
  templateUrl: './aggridtoolpanel.component.html',
  styleUrls: ['./aggridtoolpanel.component.css']
})
export class AggridtoolpanelComponent {
  public columnDefs: ColDef[] = [
    { field: "athlete", filter: "agTextColumnFilter", minWidth: 200 },
    { field: "age" },
    { field: "country", minWidth: 180 },
    { field: "year" },
    { field: "date", minWidth: 150 },
    { field: "gold" },
    { field: "silver" },
    { field: "bronze" },
    { field: "total" },
  ];
  public defaultColDef: ColDef = {
    flex: 1,
    minWidth: 100,
    // allow every column to be aggregated
    enableValue: true,
    // allow every column to be grouped
    enableRowGroup: true,
    // allow every column to be pivoted
    enablePivot: true,
    filter: true,
  };
  public autoGroupColumnDef: ColDef = {
    minWidth: 200,
  };
  public sideBar: SideBarDef | string | string[] | boolean | null = "columns";
  public rowData!: IOlympicData[];
  public themeClass: string =
    "ag-theme-quartz";

  constructor(private http: HttpClient) {}

  onGridReady(params: GridReadyEvent<IOlympicData>) {
    this.http
      .get<
        IOlympicData[]
      >("https://www.ag-grid.com/example-assets/olympic-winners.json")
      .subscribe((data) => (this.rowData = data));
  }




  public columnDefs1: (ColDef | ColGroupDef)[] = [
    {
      headerName: "Athlete",
      children: [
        { field: "athlete", filter: "agTextColumnFilter", minWidth: 200 },
        { field: "age" },
        { field: "country", minWidth: 200 },
      ],
    },
    {
      headerName: "Competition",
      children: [{ field: "year" }, { field: "date", minWidth: 180 }],
    },
    { field: "sport", minWidth: 200 },
    {
      headerName: "Medals",
      children: [
        { field: "gold" },
        { field: "silver" },
        { field: "bronze" },
        { field: "total" },
      ],
    },
  ];
  public defaultColDef1: ColDef = {
    flex: 1,
    minWidth: 100,
    // allow every column to be aggregated
    enableValue: true,
    // allow every column to be grouped
    enableRowGroup: true,
    // allow every column to be pivoted
    enablePivot: true,
    filter: true,
  };
  public autoGroupColumnDef1: ColDef = {
    minWidth: 200,
  };
  public sideBar1: SideBarDef | string | string[] | boolean | null = "columns";
  public rowData1!: IOlympicData[];
  



  onGridReady1(params: GridReadyEvent<IOlympicData>) {
    this.http
      .get<
        IOlympicData[]
      >("https://www.ag-grid.com/example-assets/olympic-winners.json")
      .subscribe((data) => (this.rowData1 = data));
  }



  public columnDefs2: ColDef[] = [
    { field: "athlete", minWidth: 200, filter: "agTextColumnFilter" },
    { field: "age" },
    { field: "country", minWidth: 200 },
    { field: "year" },
    { field: "date", minWidth: 180 },
    { field: "gold", filter: false },
    { field: "silver", filter: false },
    { field: "bronze", filter: false },
    { field: "total", filter: false },
  ];
  public defaultColDef2: ColDef = {
    flex: 1,
    minWidth: 100,
    filter: true,
  };
  public sideBar2: SideBarDef | string | string[] | boolean | null = "filters";
  public rowData2!: IOlympicData[];
 



  onGridReady2(params: GridReadyEvent<IOlympicData>) {
    this.http
      .get<
        IOlympicData[]
      >("https://www.ag-grid.com/example-assets/olympic-winners.json")
      .subscribe((data) => (this.rowData2 = data));
  }





  public columnDefs3: ColDef[] = [
    { field: "athlete", width: 150, filter: "agTextColumnFilter" },
    { field: "age", width: 90 },
    { field: "country", width: 120 },
    { field: "year", width: 90 },
    { field: "date", width: 110 },
    { field: "gold", width: 100, filter: false },
    { field: "silver", width: 100, filter: false },
    { field: "bronze", width: 100, filter: false },
    { field: "total", width: 100, filter: false },
  ];
  public defaultColDef3: ColDef = {
    editable: true,
    flex: 1,
    minWidth: 100,
    filter: true,
  };
  public icons: {
    [key: string]: Function | string;
  } = {
    "custom-stats": '<span class="ag-icon ag-icon-custom-stats"></span>',
  };
  public sideBar3: SideBarDef | string | string[] | boolean | null = {
    toolPanels: [
      {
        id: "columns",
        labelDefault: "Columns",
        labelKey: "columns",
        iconKey: "columns",
        toolPanel: "agColumnsToolPanel",
      },
      {
        id: "filters",
        labelDefault: "Filters",
        labelKey: "filters",
        iconKey: "filter",
        toolPanel: "agFiltersToolPanel",
      },
      {
        id: "customStats",
        labelDefault: "Custom Stats",
        labelKey: "customStats",
        iconKey: "custom-stats",
        toolPanel: CustomStatsToolPanel,
        toolPanelParams: {
          title: "Custom Stats",
        },
      },
    ],
    defaultToolPanel: "customStats",
  };
  public rowData3!: IOlympicData[];
 



  onCellValueChanged(params: CellValueChangedEvent ) {
    params.api.refreshClientSideRowModel();
  }

  onGridReady3(params: GridReadyEvent<IOlympicData>) {
    this.http
      .get<
        IOlympicData[]
      >("https://www.ag-grid.com/example-assets/olympic-winners.json")
      .subscribe((data) => {
        this.rowData3 = data;
      });
  }
}





