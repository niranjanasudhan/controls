import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HostListener } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  public selectedItem = 0;
  @Output() closeSideNav = new EventEmitter();

  constructor(
    private router: Router,
  ) { }

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
  
}


