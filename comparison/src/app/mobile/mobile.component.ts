import { Component, EventEmitter, Output, OnInit, ChangeDetectorRef  } from '@angular/core';
import { Router } from '@angular/router';
import { HostListener } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HttpClient } from '@angular/common/http';

// Import Highcharts modules as needed
import HC_exporting from 'highcharts/modules/exporting';
import HC_exportData from 'highcharts/modules/export-data';

// Initialize the modules
HC_exporting(Highcharts);
HC_exportData(Highcharts);

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})

export class MobileComponent implements OnInit {
  public selectedItem = 0;
  @Output() closeSideNav = new EventEmitter();

  // Declare storedValue property
  sidebarOpen: boolean = false;

  constructor(
    private router: Router,
    private http: HttpClient,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  
  chartData2 = [
    { name: 'Awaiting Approval', value: 1 },
    { name: 'RFQ Not Created', value: 9 },
    { name: 'RFQ Not Sent', value: 106 }
  ];

  twochartData2 = [
    { name: 'Allision', value: 5 },
    { name: 'Collision', value: 2.2 },
    { name: 'Fire', value: 3.8 },
    { name: 'Machinery', value: 1 },
    { name: 'Passenger', value: 7.9 },
    { name: 'Contamination', value: 6.5 },
    { name: 'Security', value: 3 },
  ];

  thirdchartData2 = [
    { name: 'Alpha', value: 13 },
    { name: 'Explorer', value: 8 },
    { name: 'Gama', value: 21 },
    { name: 'Green', value: 1 }
  ];

  lastchartData2 = [
    { name: 'Unquoted', value: 103 },
    { name: 'Partially Received', value: 43 },
    { name: 'All Quote Received', value: 44 },
    { name: 'Awaiting PO Creation', value: 92 }
  ];
  

  renderChart(): void {
    Highcharts.chart('chart-container2', {
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
        data: this.chartData2.map(item => ({
          name: item.name,
          y: item.value
        }))
      }] as Highcharts.SeriesOptionsType[] 
    });

    Highcharts.chart('last-chart-container2', {
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
        data: this.lastchartData2.map(item => ({
          name: item.name,
          y: item.value
        }))
      }] as Highcharts.SeriesOptionsType[] 
    });

    Highcharts.chart('third-chart-container2', {
      chart: {
        type: 'bar'
      },
      title: {
        text: ''
      },
      xAxis: {
        categories: this.thirdchartData2.map(item => item.name), // Categories for the x-axis
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
        data: this.thirdchartData2.map(item => item.value) // Data for the bars
      }] as Highcharts.SeriesOptionsType[] 
    });

    Highcharts.chart('two-chart-container2', {
      chart: {
        type: 'column'
      },
      title: {
        text: ''
      },
      xAxis: {
        categories: this.twochartData2.map(item => item.name), // Categories for the y-axis (since it's horizontal)
        title: {
          text: 'SCruise' // Y-axis label
        }
      },
      yAxis: {
        min: 0, // Minimum value for the y-axis
    max: 8, // Maximum value for the y-axis
    tickInterval: 2, // Set the interval between ticks to 1
        title: {
          text: 'Count' // X-axis label
        },
        
      },
      plotOptions: {
        column: { // Change plot options to 'column' for column chart
          color: '#2565C0', // Column color
          pointWidth: 20, // Column width
          dataLabels: {
            enabled: false
          }
        }
      },
      legend: {
        enabled: false // Disable legend for horizontal bar chart
      },
      series: [{
        name: 'Value',
        data: this.twochartData2.map(item => item.value) // Data for the bars
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

  public mobilenavItems = [
    {
      title: 'Dashboard',
      route: '/dashboard',
      imageUrl: '../../assets/Icons/mobile-Favourite1.png'
    },
    {
      title: 'Graph',
      route: '/',
      imageUrl: '../../assets/Icons/mobile-Graph1.png'
    },
    {
      title: 'Service',
      route: '/dashboard',
      imageUrl: '../../assets/Icons/mobile-Service1.png'
    },
    {
      title: 'Shipping',
      route: '/dashboard',
      imageUrl: '../../assets/Icons/mobile-Ship1.png'
    },
    {
      title: 'Setting',
      route: '/dashboard',
      imageUrl: '../../assets/Icons/mobile-Settings1.png'
    },
    {
      title: 'Notes',
      route: '/dashboard',
      imageUrl: '../../assets/Icons/mobile-Notes1.png'
    },
    {
      title: 'Builders',
      route: '/dashboard',
      imageUrl: '../../assets/Icons/mobile-Builder1.png'
    },
    {
      title: 'Shop',
      route: '/dashboard',
      imageUrl: '../../assets/Icons/mobile-Shop1.png'
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
  selctedRegionsValue: string = "All Regions";

  searchQuery: string = '';

  // {athlete: 'Michael Phelps', age: 23, country: 'United States', year: 2008, date: '24/08/2008', …}

  // rowData = [
  //   { title: "Certificates", surveyScheuled: '23', Expired: 15,  In30days: 11, In60days: null, In90days: null, commenced: null, nullCertificate: 41  },
  //   { title: "Survey", surveyScheuled: '12', Expired: 29, In30days: 10, In60days: null, In90days: 12, commenced: 14, nullCertificate: null },
  //   { title: "Conditions", surveyScheuled: '09', Expired: 22, In30days: 26, In60days: 13, In90days: null, commenced: 16, nullCertificate: null },
  //   { title: "Memos/Remarks", surveyScheuled: '29', Expired: null, In30days: 19, In60days: null, In90days: null, commenced: 21, nullCertificate: null }
  // ];

rowData: any[] = [];

isLoading = false;

ngOnInit(): void {
    this.renderChart();
    this.loadData();

    const storedValue: string | null = localStorage.getItem('sidebarOpen');
    this.sidebarOpen = storedValue === 'true';

    // Listen for changes in localStorage
    window.addEventListener('storage', this.onStorageChange.bind(this));
  }

  // Handle storage change event
  onStorageChange(event: StorageEvent): void {
    if (event.key === 'sidebarOpen') {
      const newValue: string | null = event.newValue;
      this.sidebarOpen = newValue === 'true';
    }
  }


  loadData() {
    this.isLoading = true; // Set loading flag to true
    this.http.get<any[]>('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .subscribe(data => {
        this.rowData = data;
        this.isLoading = false; 
      },
      error => {
        console.error('Error fetching data:', error);
      }
    );
  }
  
  columnDefs = [
    // { headerName: '', field: 'title', width: 'auto', cellStyle: { color:"#186CAA" } },
    // { headerName: 'No. Survey Scheuled', field: 'surveyScheuled' },
    // { headerName: 'Expired', field: 'Expired' },
    // { headerName: 'In 30 days', field: 'In30days' },
    // { headerName: 'In 31-60 days', field: 'In60days' },
    // { headerName: 'In 61-90 days', field: 'In90days' },
    // { headerName: 'Commenced', field: 'commenced' },
    // { headerName: 'Null Certificate', field: 'nullCertificate' }
    { headerName: 'Title', field: 'athlete', width: 'auto' },
    { headerName: 'No. Survey Scheuled', field: 'age', width: '150px' },
    { headerName: 'Expired', field: 'gold', width: '150px' },
    { headerName: 'In 30 days', field: 'silver', width: '150px'},
    { headerName: 'In 31-60 days', field: 'bronze', width: '150px'  },
    { headerName: 'In 61-90 days', field: 'total', width: '150px'  },
  ];

  defaultColDef = {
    width: 85,
    cellStyle: { 
      fontWeight: 'bold',
      border: '1px solid #ccc' // Add border styling to each cell
    },
    resizable: true
  };

  gridOptions = {
    headerHeight: 50, // Adjust this value based on your header content
    autoHeight: true, // Automatically adjust the grid height based on row content
    suppressAutoSize: true, // Prevent automatic column resizing
  };
}


