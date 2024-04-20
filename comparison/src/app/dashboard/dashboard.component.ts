import { Component, EventEmitter, Output, AfterViewInit  } from '@angular/core';
import { Router } from '@angular/router';
import { HostListener } from '@angular/core';
import * as Highcharts from 'highcharts';

// Import Highcharts modules as needed
import HC_exporting from 'highcharts/modules/exporting';
import HC_exportData from 'highcharts/modules/export-data';

// Initialize the modules
HC_exporting(Highcharts);
HC_exportData(Highcharts);
import { Observable } from 'rxjs';
import { Athlete } from "./model";
import { State } from "@progress/kendo-data-query";
import { HttpClient } from '@angular/common/http';
import { map, tap } from "rxjs/operators";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {
  public selectedItem = 0;
  public loading=true;
  public BASE_URL="";
  public view!: Observable<Athlete[]>;
  chartData1 = [
    { name: 'Awaiting Approval', value: 1 },
    { name: 'RFQ Not Created', value: 9 },
    { name: 'RFQ Not Sent', value: 106 }
  ];

  twochartData1 = [
    { name: 'Allision', value: 5 },
    { name: 'Collision', value: 2.2 },
    { name: 'Fire', value: 3.8 },
    { name: 'Machinery', value: 1 },
    { name: 'Passenger', value: 7.9 },
    { name: 'Contamination', value: 6.5 },
    { name: 'Security', value: 3 },
  ];

  thirdchartData1 = [
    { name: 'Alpha', value: 13 },
    { name: 'Explorer', value: 8 },
    { name: 'Gama', value: 21 },
    { name: 'Green', value: 1 }
  ];

  lastchartData1 = [
    { name: 'Unquoted', value: 103 },
    { name: 'Partially Received', value: 43 },
    { name: 'All Quote Received', value: 44 },
    { name: 'Awaiting PO Creation', value: 92 }
  ];


  @Output() closeSideNav = new EventEmitter();

  constructor(
    private router: Router,private http:HttpClient
  ) { }

  ngAfterViewInit(): void {
    this.renderChart();
  }
  ngOnInit() {
    //this.BASE_URL="https://demos.telerik.com/kendo-ui/service-v4/odata/";
    this.BASE_URL="https://www.ag-grid.com/example-assets/olympic-winners.json";
   let tableName="Products";
  //  const queryStr = `${toODataString(this.state)}&$count=true`;
    const queryStr = ``;
    // this.view=   this.http.get(`${this.BASE_URL}${tableName}?${queryStr}`
    this.view=   this.http.get(`${this.BASE_URL}`
      
      ).pipe(
      map((response: any) => <Athlete[]>response),
      tap(() => (this.loading = false))
    );


  }
  renderChart(): void {
    Highcharts.chart('third-chart-1', {
      chart: {
        type: 'bar'
      },
      title: {
        text: ''
      },
      xAxis: {
        categories: this.thirdchartData1.map(item => item.name), // Categories for the x-axis
        title: {
          text: 'Vessel' // X-axis label
        }
      },
      yAxis: {
        title: {
          text: 'Count' // Y-axis label
        }
      },
      plotOptions: {
        bar: {
          color: '#2565C0', // Bar color
          pointWidth: 20, // Bar width
          dataLabels: {
            enabled: false
          }
        }
      },
      legend: {
        enabled: false // Disable legend for bar chart
      },
      series: [{
        name: 'Value',
        data: this.thirdchartData1.map(item => item.value) // Data for the bars
      }] as Highcharts.SeriesOptionsType[] 
    });

    Highcharts.chart('two-chart-1', {
      chart: {
        type: 'column'
      },
      title: {
        text: ''
      },
      xAxis: {
        categories: this.twochartData1.map(item => item.name), 
        title: {
          text: 'SCruise'
        }
      },
      yAxis: {
        min: 0,
        max: 8,
        tickInterval: 2,
        title: {
          text: 'Count'
        }
      },
      plotOptions: {
        column: { 
          color: '#2565C0',
          pointWidth: 20, 
          dataLabels: {
            enabled: false
          }
        }
      },
      legend: {
        enabled: false
      },
      series: [{
        name: 'Value',
        data: this.twochartData1.map(item => item.value)
      }] as Highcharts.SeriesOptionsType[] 
    });
    
    Highcharts.chart('chart-container-1', {
      chart: {
        type: 'pie',
        // plotBackgroundColor: null,
        // plotBorderWidth: null,
        // plotShadow: false,
        
      },
      title: {
        text: ''
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.y}</b>'
      },
      plotOptions: {
        pie: {
          innerSize: '70%', // This sets the size of the hole in the center, making it a doughnut shape
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false,
            format: '<b>{point.name}</b>: {point.y}'
          },
          showInLegend: true,
          colors: ['#E94649', '#229C81', '#2565C0'] // Specify colors for each data point
        }
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0,
        symbolWidth: 20, // Adjust symbol width
        symbolHeight: 10, // Adjust symbol height
        symbolRadius: 0, // Adjust symbol corner radius
        symbolPadding: 10, // Adjust symbol padding
      },
      series: [{
        name: 'Count',
        colorByPoint: true,
        data: this.chartData1.map(item => ({
          name: item.name,
          y: item.value
        }))
      }] as Highcharts.SeriesOptionsType[] 
    });

    Highcharts.chart('last-chart-1', {
      chart: {
        type: 'pie',
        // plotBackgroundColor: null,
        // plotBorderWidth: null,
        // plotShadow: false,
        
      },
      title: {
        text: ''
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.y}</b>'
      },
      plotOptions: {
        pie: {
          innerSize: '70%', // This sets the size of the hole in the center, making it a doughnut shape
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false,
            format: '<b>{point.name}</b>: {point.y}'
          },
          showInLegend: true,
          colors: ['#E94649', '#8057C6', '#229C81', '#2565C0'] // Specify colors for each data point
        }
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0,
        symbolWidth: 20, // Adjust symbol width
        symbolHeight: 10, // Adjust symbol height
        symbolRadius: 0, // Adjust symbol corner radius
        symbolPadding: 10, // Adjust symbol padding
      },
      series: [{
        name: 'Count',
        colorByPoint: true,
        data: this.lastchartData1.map(item => ({
          name: item.name,
          y: item.value
        }))
      }] as Highcharts.SeriesOptionsType[] 
    });

   

    
  }

  onToggleClose() {
    this.closeSideNav.emit();
  }

  public areaList: Array<string> = [
    "Boston",
    "Chicago",
    "Houston",
    "Los Angeles",
    "Miami",
    "New York",
    "Philadelphia",
    "San Francisco",
    "Seattle",
  ];

  public navItems = [
    {
      title: 'Dashboard',
      route: '/dashboard',
      imageUrl: '../../assets/Icons/Dashboard1.png'
    },
    {
      title: 'Graph',
      route: '/',
      imageUrl: '../../assets/Icons/Graph1.png'
    },
    {
      title: 'Service',
      route: '/dashboard',
      imageUrl: '../../assets/Icons/Service1.png'
    },
    {
      title: 'Shipping',
      route: '/dashboard',
      imageUrl: '../../assets/Icons/Ship1.png'
    },
    {
      title: 'Setting',
      route: '/dashboard',
      imageUrl: '../../assets/Icons/Settings1.png'
    },
    {
      title: 'Notes',
      route: '/dashboard',
      imageUrl: '../../assets/Icons/Notes1.png'
    },
    {
      title: 'Builders',
      route: '/dashboard',
      imageUrl: '../../assets/Icons/Builder1.png'
    },
    {
      title: 'Shop',
      route: '/dashboard',
      imageUrl: '../../assets/Icons/Shop1.png'
    },
  ];
  handleClick(selectedItem: any) {
    this.selectedItem = selectedItem;
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'ArrowUp') {
      if (this.selectedItem < (this.navItems.length) && this.selectedItem > 0) {
        this.router.navigate([this.navItems[this.selectedItem - 1].route]);
        this.selectedItem = this.selectedItem - 1;
      }
    }
    if (event.key === 'ArrowDown') {
      if (this.selectedItem >= 0 && this.selectedItem < this.navItems.length) {
        this.router.navigate([this.navItems[this.selectedItem + 1].route]);
        this.selectedItem = this.selectedItem + 1;
      }
    }
  }
  

  public onButtonClick(): void {
    console.log("click");
  }

  public textboxValue = "";

  selectedValue: string = 'Action';
  selctedWidgetsValue: string = "Widgets";
  selctedRegionsValue: string = "All Regions"



  public rowData: any[] = [
    { title: "Certificates", surveyScheduled: '23', Expired: 15, In30days: 11, In60days: null, In90days: null, commenced: null, nullCertificate: 41 },
    { title: "Survey", surveyScheduled: '12', Expired: 29, In30days: 10, In60days: null, In90days: 12, commenced: 14, nullCertificate: null },
    { title: "Conditions", surveyScheduled: '09', Expired: 22, In30days: 26, In60days: 13, In90days: null, commenced: 16, nullCertificate: null },
    { title: "Memos/Remarks", surveyScheduled: '29', Expired: null, In30days: 19, In60days: null, In90days: null, commenced: 21, nullCertificate: null }
  ];

  public columnDefs: any[] = [
    { headerName: '', field: 'title', width: 'auto' },
    { headerName: 'No. Survey Scheduled', field: 'surveyScheduled' },
    { headerName: 'Expired', field: 'Expired' },
    { headerName: 'In 30 days', field: 'In30days' },
    { headerName: 'In 31-60 days', field: 'In60days' },
    { headerName: 'In 61-90 days', field: 'In90days' },
    { headerName: 'Commenced', field: 'commenced' },
    { headerName: 'Null Certificate', field: 'nullCertificate' }
  ];


}


