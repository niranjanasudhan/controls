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


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {
  public selectedItem = 0;
  @Output() closeSideNav = new EventEmitter();

  constructor(
    private router: Router,
  ) { }

  ngAfterViewInit(): void {
    this.renderChart();
  }

  renderChart(): void {
    Highcharts.chart('chart-container', {
      chart: {
        type: 'line'
      },
      title: {
        text: 'Sample Line Chart'
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May']
      },
      yAxis: {
        title: {
          text: 'Value'
        }
      },
      series: [{
        name: 'Series 1',
        data: [1, 3, 2, 4, 5]
      }] as Highcharts.SeriesOptionsType[] 
    });
  }

  onToggleClose() {
    this.closeSideNav.emit();
  }

  ngOnInit() {
   
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
      imageUrl: '../../assets/Icons/Dashboard.png'
    },
    {
      title: 'Graph',
      route: '/',
      imageUrl: '../../assets/Icons/Graph.png'
    },
    {
      title: 'Service',
      route: '/dashboard',
      imageUrl: '../../assets/Icons/Service.png'
    },
    {
      title: 'Shipping',
      route: '/dashboard',
      imageUrl: '../../assets/Icons/Ship.png'
    },
    {
      title: 'Setting',
      route: '/dashboard',
      imageUrl: '../../assets/Icons/Settings.png'
    },
    {
      title: 'Notes',
      route: '/dashboard',
      imageUrl: '../../assets/Icons/Notes.png'
    },
    {
      title: 'Builders',
      route: '/dashboard',
      imageUrl: '../../assets/Icons/Builder.png'
    },
    {
      title: 'Shop',
      route: '/dashboard',
      imageUrl: '../../assets/Icons/Shop.png'
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
}


