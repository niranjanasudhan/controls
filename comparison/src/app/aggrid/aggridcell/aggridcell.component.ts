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
  ITooltipParams
} from "@ag-grid-community/core";


import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
ModuleRegistry.registerModules([ClientSideRowModelModule]);
import { CompanyLogoRenderer } from "./companyLogoRenderer.component";
import { CompanyRenderer } from "./companyRenderer.component";
import { CustomButtonComponent } from "./customButtonComponent.component";
import { MissionResultRenderer } from "./missionResultRenderer.component";
import { PriceRenderer } from "./priceRenderer.component";
import { IOlympicData } from "./interfaces";
interface IRow {
  company: string;
  location: string;
  price: number;
  successful: boolean;
}
@Component({
  selector: 'app-aggridcell',
  templateUrl: './aggridcell.component.html',
  styleUrls: ['./aggridcell.component.css'],

})
export class AggridcellComponent {
  public defaultColDef: ColDef = {
    flex: 1,
  };
  public rowData: any[] | null = [] as IRow[];
  public columnDefs: ColDef[] = [
    {
      field: "company",
      cellRenderer: CompanyRenderer,
    },
    {
      headerName: "Logo",
      field: "company",
      cellRenderer: CompanyLogoRenderer,
    },
    {
      headerName: "Mission Cost",
      field: "price",
      cellRenderer: PriceRenderer,
    },
    {
      field: "successful",
      headerName: "Success",
      cellRenderer: MissionResultRenderer,
    },
    {
      field: "actions",
      headerName: "Actions",
      cellRenderer: CustomButtonComponent,
    },
  ] as ColDef[];
  public themeClass: string =
    "ag-theme-quartz";

  constructor(private http: HttpClient) {}

  onGridReady(params: GridReadyEvent) {
    this.http
      .get<
        any[]
      >("https://www.ag-grid.com/example-assets/small-space-mission-data.json")
      .subscribe((data) => {
        this.rowData = data;
      });
  }



  private gridApi!: GridApi;
  public columnDefs1: ColDef[] = [
    { field: "a" },
    { field: "b" },
    { field: "c" },
    { field: "d" },
    { field: "e" },
    { field: "f" },
  ];
  public defaultColDef1: ColDef = {
    flex: 1,
    cellClass: "align-right",
    enableCellChangeFlash: true,
    valueFormatter: (params) => {
      return formatNumber(params.value);
    },
  };
  public rowData1: any[] | null = createRowData();
  public themeClass1: string =
    "ag-theme-quartz";

  onUpdateSomeValues() {
    var rowCount = this.gridApi.getDisplayedRowCount();
    // pick 20 cells at random to update
    for (var i = 0; i < 20; i++) {
      var row = Math.floor(Math.random() * rowCount);
      var rowNode = this.gridApi.getDisplayedRowAtIndex(row)!;
      var col = ["a", "b", "c", "d", "e", "f"][i % 6];
      rowNode.setDataValue(col, Math.floor(Math.random() * 10000));
    }
  }

  onFlashOneCell() {
    // pick fourth row at random
    var rowNode = this.gridApi.getDisplayedRowAtIndex(4)!;
    // pick 'c' column
    this.gridApi.flashCells({ rowNodes: [rowNode], columns: ["c"] });
  }

  onFlashTwoColumns() {
    // flash whole column, so leave row selection out
    this.gridApi.flashCells({ columns: ["c", "d"] });
  }

  onFlashTwoRows() {
    // pick fourth and fifth row at random
    var rowNode1 = this.gridApi.getDisplayedRowAtIndex(4)!;
    var rowNode2 = this.gridApi.getDisplayedRowAtIndex(5)!;
    // flash whole row, so leave column selection out
    this.gridApi.flashCells({ rowNodes: [rowNode1, rowNode2] });
  }

  onGridReady1(params: GridReadyEvent) {
    this.gridApi = params.api;
  }










  public columnDefs2: (ColDef | ColGroupDef)[] = [
    {
      headerName: "Athlete",
      field: "athlete",
      // here the Athlete column will tooltip the Country value
      tooltipField: "country",
      headerTooltip: "Tooltip for Athlete Column Header",
    },
    {
      field: "age",
      tooltipValueGetter: (p: ITooltipParams) =>
        "Create any fixed message, e.g. This is the Athlete’s Age ",
      headerTooltip: "Tooltip for Age Column Header",
    },
    {
      field: "year",
      tooltipValueGetter: (p: ITooltipParams) =>
        "This is a dynamic tooltip using the value of " + p.value,
      headerTooltip: "Tooltip for Year Column Header",
    },
    {
      headerName: "Hover For Tooltip",
      headerTooltip: "Column Groups can have Tooltips also",
      children: [
        {
          field: "sport",
          tooltipValueGetter: () => "Tooltip text about Sport should go here",
          headerTooltip: "Tooltip for Sport Column Header",
        },
      ],
    },
  ];
  public defaultColDef2: ColDef = {
    flex: 1,
    minWidth: 100,
  };
  public tooltipShowDelay = 500;
  public rowData2!: IOlympicData[];
  public themeClass2: string =
    "ag-theme-quartz";



  onGridReady2(params: GridReadyEvent<IOlympicData>) {
    this.http
      .get<
        IOlympicData[]
      >("https://www.ag-grid.com/example-assets/olympic-winners.json")
      .subscribe((data) => {
        this.rowData2 = data;
      });
  }













}

function formatNumber(number: number) {
  return Math.floor(number).toLocaleString();
}
function createRowData() {
  var rowData1 = [];
  for (var i = 0; i < 20; i++) {
    rowData1.push({
      a: Math.floor(((i + 323) * 25435) % 10000),
      b: Math.floor(((i + 323) * 23221) % 10000),
      c: Math.floor(((i + 323) * 468276) % 10000),
      d: 0,
      e: 0,
      f: 0,
    });
  }
  return rowData1;
}








