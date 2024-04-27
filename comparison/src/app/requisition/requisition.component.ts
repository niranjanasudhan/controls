import { Component, ViewChild, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Athlete } from "../dashboard/model";
import { HttpClient } from '@angular/common/http';
import { map, tap } from "rxjs/operators";
import { DataBindingDirective } from './dataBindingDirective';

@Component({
  selector: 'app-requisition',
  templateUrl: './requisition.component.html',
  styleUrls: ['./requisition.component.css']
})
export class RequisitionComponent {
  @ViewChild(DataBindingDirective) dataBinding!: DataBindingDirective;
  isFullScreen = false;

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

  searchCriteria: any = {
    requisition: '',
    category: '',
    fromDate: null,
    toDate: null
  };

  public loading=true;
  public BASE_URL="";
  public view!: Observable<Athlete[]>;


  constructor(
    private router: Router,private http:HttpClient
  ) {
    this.updateDropdownButtons();
   }

  ngOnInit() {
    this.BASE_URL="https://www.ag-grid.com/example-assets/olympic-winners.json";
    this.view=this.http.get(`${this.BASE_URL}`
      
      ).pipe(
      map((response: any) => <Athlete[]>response),
      tap(() => (this.loading = false))
    );


  }
  
  toggleFullScreen() {
    const gridElement = this.dataBinding.getGridElement();

    if (!this.isFullScreen) {
        if (gridElement.requestFullscreen) {
            gridElement.requestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }

    this.isFullScreen = !this.isFullScreen;
}

formatDate(field: string): void {
  const date = this.searchCriteria[field];
  if (date instanceof Date) {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    this.searchCriteria[field] = `${day}/${month}/${year}`;
  }
}

  saveSearch(): void {
    console.log('Search Criteria:', this.searchCriteria);
    // Perform any further actions here, such as sending the search criteria to a server
  }

  activeTab: string = 'All';
  showDropdown: boolean = false;

  buttons = [
    { label: 'All', count: 147 },
    { label: 'Cancelled', count: 3 },
    { label: 'Draft', count: 12 },
    { label: 'Pending for Approval', count: 21 },
    { label: 'Rejected', count: 7 },
    { label: 'RFQ Not Created', count: 18 }
  ];

  dropdownButtons: { label: string; count: number; }[] = [];


  

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateDropdownButtons();
  }

  isActive(tabName: string): string {
    // if(this.activeTab === tabName){
    //   console.log("tabName: ", tabName, "this.activeTab: ", this.activeTab)
    // }
    
    return this.activeTab === tabName ? 'filter-tab-btn-active' : 'filter-tab-btn';
  }

  setActive(tabName: string): void {
    this.activeTab = tabName;
    // console.log(" this.activeTab = tabName;",  this.activeTab)
  }

  selectedOption: string = '';

  // Function called when an option is changed
   onOptionChange(optionValue: string): void {
    this.setActive(optionValue);
  }

  

  Copybuttons = [
    { label: 'All', count: 147 },
    { label: 'Cancelled', count: 3 },
    { label: 'Draft', count: 12 },
    { label: 'Pending for Approval', count: 21 },
    { label: 'Rejected', count: 7 },
    { label: 'RFQ Not Created', count: 18 }
  ];

  updateDropdownButtons(): void {
    const totalWidth = window.innerWidth;
    const buttonWidth = 200; // Adjust as needed
    var numVisibleButtons = Math.floor(totalWidth / buttonWidth);
  
    if (numVisibleButtons < this.Copybuttons.length) {
      // console.log("numVisibleButtons: ", numVisibleButtons)
      this.buttons = this.Copybuttons.slice(0, numVisibleButtons);
      this.dropdownButtons = this.Copybuttons.slice(numVisibleButtons);
      this.showDropdown = true;
    } else {
      this.buttons = [...this.Copybuttons];
      this.showDropdown = false;
    }
  }
  
  
  
}