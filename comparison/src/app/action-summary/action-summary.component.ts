import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Athlete } from "../dashboard/model";
import { HttpClient } from '@angular/common/http';
import { map, tap } from "rxjs/operators";
import { DataBindingDirective } from '../requisition/dataBindingDirective';
import { SelectEvent } from "@progress/kendo-angular-layout";


import { SVGIcon, boldIcon, textboxIcon, xIcon, chevronDownIcon} from "@progress/kendo-svg-icons";

@Component({
  selector: 'app-action-summary',
  templateUrl: './action-summary.component.html',
  styleUrls: ['./action-summary.component.css']
})
export class ActionSummaryComponent {
  @ViewChild(DataBindingDirective) dataBinding!: DataBindingDirective;
  isFullScreen = false;

  public folderSVG: SVGIcon = chevronDownIcon;
  public closeSVG: SVGIcon = xIcon;
  public boldSVG: SVGIcon = boldIcon;
  public textboxSVG: SVGIcon = textboxIcon;
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

  public sizes = [10, 15, 20];
  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }

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
    this.BASE_URL = "https://www.ag-grid.com/example-assets/olympic-winners.json";
    this.view = this.http.get<Athlete[]>(this.BASE_URL).pipe(
      map((response: Athlete[]) => response.slice(0, 50)), // Slice the response to get only the first 50 items
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

  activeTab: string = 'Followup Action';
  showDropdown: boolean = false;

  buttons = [
    { label: 'Followup Action'},
    { label: 'Workflow Action'},
  ];

  dropdownButtons: { label: string; }[] = [];


  

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateDropdownButtons();
  }

  isActive(tabName: string): string {
    return this.activeTab === tabName ? 'filter-tab-btn-active' : 'filter-tab-btn';
  }

  setActive(tabName: string): void {
    this.activeTab = tabName;
  }

  selectedOption: string = '';

  // Function called when an option is changed
   onOptionChange(optionValue: string): void {
    this.setActive(optionValue);
  }

  

  Copybuttons = [
    { label: 'Followup Action'},
    { label: 'Workflow Action'},
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

  isSidebarOpen: boolean = false;
  isPinSidebar: boolean = false;
  
  openSidebar() {
    this.isSidebarOpen = true;
  }

  closeSidebar() {
    this.isSidebarOpen = false;
    this.isPinSidebar = false;
  }

  pinSidebar() {
    this.isPinSidebar = !this.isPinSidebar;
  }

  gridSize: boolean = false;


  gridSizeToggle() {
    this.gridSize = !this.gridSize;
  }

  public overdue: boolean = true;
  public due: boolean = true;
  public assigned: boolean = true;
  public notassigned: boolean = true;

  radioOverdueChanged() {
   this.overdue = !this.overdue;
  }
  radioDueChanged() {
    this.due = !this.due;
   }
   radioAssignedChanged() {
    this.assigned = !this.assigned;
   }
   radioNotassignedChanged() {
    this.notassigned = !this.notassigned;
   }
}
