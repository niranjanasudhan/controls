import { Component } from "@angular/core";
import { AgGridAngular } from "@ag-grid-community/angular";
import {
  AgChartThemeOverrides,
  ColDef,
  ColGroupDef,
  FirstDataRenderedEvent,
  GridApi,
  GridOptions,
  GridReadyEvent,
  ModuleRegistry,
  createGrid,
} from "@ag-grid-community/core";
import { getData } from "./data";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { GridChartsModule } from "@ag-grid-enterprise/charts-enterprise";
import { MenuModule } from "@ag-grid-enterprise/menu";
ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  GridChartsModule,
  MenuModule,
]);
@Component({
  selector: 'app-aggridintegratedchart',
  templateUrl: './aggridintegratedchart.component.html',
  styleUrls: ['./aggridintegratedchart.component.css']
})
export class AggridintegratedchartComponent {
  public columnDefs: ColDef[] = [
    { field: "country", width: 150, chartDataType: "category" },
    { field: "gold", chartDataType: "series" },
    { field: "silver", chartDataType: "series" },
    { field: "bronze", chartDataType: "series" },
  ];
  public defaultColDef: ColDef = {
    flex: 1,
    minWidth: 100,
  };
  public popupParent: HTMLElement | null = document.body;
  public chartThemeOverrides: AgChartThemeOverrides = {
    common: {
      title: {
        enabled: true,
        text: "Precious Metals Production",
      },
      subtitle: {
        enabled: true,
        text: "by country",
        fontSize: 14,
        fontFamily: "Monaco, monospace",
        color: "#aaa",
        spacing: 10,
      },
      padding: {
        left: 80,
        right: 80,
      },
      legend: {
        spacing: 30,
        item: {
          label: {
            fontStyle: "italic",
            fontWeight: "bold",
            fontSize: 18,
            fontFamily: "Palatino, serif",
            color: "#aaa",
          },
          marker: {
            shape: "circle",
            size: 10,
            padding: 10,
            strokeWidth: 2,
          },
          paddingX: 30,
        },
      },
    },
  };
  public rowData!: any[];
  public themeClass: string =
    "ag-theme-quartz";

  onFirstDataRendered(params: FirstDataRenderedEvent) {
    params.api.createRangeChart({
      cellRange: {
        rowStartIndex: 0,
        rowEndIndex: 3,
        columns: ["country", "gold", "silver", "bronze"],
      },
      chartType: "groupedColumn",
    });
  }

  onGridReady(params: GridReadyEvent) {
    

    getData().then((rowData) => params.api.setGridOption("rowData", rowData));
  }
}
