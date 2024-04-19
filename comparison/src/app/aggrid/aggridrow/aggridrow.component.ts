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
  RowSpanParams,
  createGrid,
} from "@ag-grid-community/core";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
ModuleRegistry.registerModules([ClientSideRowModelModule]);
import { IOlympicData } from "./interfaces";

import {
  CheckboxSelectionCallbackParams,
  HeaderCheckboxSelectionCallbackParams,
  IGroupCellRendererParams,
} from "@ag-grid-community/core";
import { RowGroupingModule } from "@ag-grid-enterprise/row-grouping";
ModuleRegistry.registerModules([ClientSideRowModelModule, RowGroupingModule]);


@Component({
  selector: 'app-aggridrow',
  templateUrl: './aggridrow.component.html',
  styleUrls: ['./aggridrow.component.css']
})
export class AggridrowComponent {
  public columnDefs: ColDef[] = [
    {
      field: "athlete",
      rowSpan: rowSpan,
      cellClassRules: {
        "cell-span": "value==='Aleksey Nemov' || value==='Ryan Lochte'",
      },
      width: 200, rowDrag: true 
    },
    { field: "age", width: 100 },
    { field: "country" },
    { field: "year", width: 100 },
    { field: "date" },
    { field: "sport" },
    { field: "gold" },
    { field: "silver" },
    { field: "bronze" },
    { field: "total" },
  ];
  public defaultColDef: ColDef = {
    width: 170,
  };



  public autoGroupColumnDef: ColDef = {
    headerName: "Group",
    minWidth: 170,
    field: "athlete",
    valueGetter: (params) => {
      if (params.node!.group) {
        return params.node!.key;
      } else {
        return params.data[params.colDef.field!];
      }
    },
    headerCheckboxSelection: true,
    cellRenderer: "agGroupCellRenderer",
    cellRendererParams: {
      checkbox: true,
    } as IGroupCellRendererParams,
  };

  public rowSelection: "single" | "multiple" = "multiple";
  public rowGroupPanelShow: "always" | "onlyWhenGrouping" | "never" = "always";
  public pivotPanelShow: "always" | "onlyWhenPivoting" | "never" = "always";



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
}

function rowSpan(params: RowSpanParams<IOlympicData>) {
  var athlete = params.data ? params.data.athlete : undefined;
  if (athlete === "Aleksey Nemov") {
    // have all Russia age columns width 2
    return 2;
  } else if (athlete === "Ryan Lochte") {
    // have all United States column width 4
    return 4;
  } else {
    // all other rows should be just normal
    return 1;
  }
}
var checkboxSelection = function (params: CheckboxSelectionCallbackParams) {
  // we put checkbox on the name if we are not doing grouping
  return params.api.getRowGroupColumns().length === 0;
};
var headerCheckboxSelection = function (
  params: HeaderCheckboxSelectionCallbackParams,
) {
  // we put checkbox on the name if we are not doing grouping
  return params.api.getRowGroupColumns().length === 0;
};