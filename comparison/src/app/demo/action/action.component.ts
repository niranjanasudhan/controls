import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Athlete } from "../../dashboard/model";
import { HttpClient } from '@angular/common/http';
import { map, tap } from "rxjs/operators";
import { DataBindingDirective } from '../../requisition/dataBindingDirective';
import { SelectEvent } from "@progress/kendo-angular-layout";

import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { SVGIcon, boldIcon, textboxIcon, xIcon, chevronDownIcon} from "@progress/kendo-svg-icons";
import {
  AUTO_STYLE,
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

const DEFAULT_DURATION = 300;
@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css'],
  animations: [
    trigger('collapse', [
      state('false', style({ height: AUTO_STYLE, visibility: AUTO_STYLE })),
      state('true', style({ height: '0', visibility: 'hidden' })),
      transition('false => true', animate(DEFAULT_DURATION + 'ms ease-in')),
      transition('true => false', animate(DEFAULT_DURATION + 'ms ease-out'))
    ]),
    trigger('collapsefilter', [
      state('false', style({ height: AUTO_STYLE, visibility: AUTO_STYLE })),
      state('true', style({ height: '0', visibility: 'hidden' })),
      transition('false => true', animate(DEFAULT_DURATION + 'ms ease-in')),
      transition('true => false', animate(DEFAULT_DURATION + 'ms ease-out'))
    ])
  ]
})
export class ActionComponent {

  @ViewChild(DataBindingDirective) dataBinding!: DataBindingDirective;
  isFullScreen = false;
  collapsed = true;
  collapsedFilter = true;
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
public keys:any[] = [];
public hiddenColumns: string[] = [];
  constructor(
    private router: Router,private http:HttpClient,
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


   public show = true;

   public onToggle(): void {
     this.show = !this.show;
    //  this.toggleText = this.show ? "Hidе" : "Show";
   }

   toggle() {
    this.collapsed = !this.collapsed;
  }

  expand() {
    this.collapsed = false;
    this.view.subscribe((value: any[]) => {
      let jobs: any[] = value;
      console.log(jobs);
      console.log(jobs.length);
      this.keys = Object.keys(jobs[0]);
console.log(this.keys);
  });

  // console.log(this.view);
  }

  collapse() {
    this.collapsed = true;
  }
  toggleFilter() {
    this.collapsedFilter = !this.collapsedFilter;
  }

  expandFilter() {
    this.collapsedFilter = false;
  }

  collapseFilter() {
    this.collapsedFilter = true;
  }

  public isHidden(columnName: string): boolean {
    return this.hiddenColumns.indexOf(columnName) > -1;
  }

  public isDisabled(columnName: string): boolean {
    return (
      this.keys.length - this.hiddenColumns.length === 1 &&
      !this.isHidden(columnName)
    );
  }

  public hideColumn(columnName: string): void {
    const hiddenColumns = this.hiddenColumns;

    if (!this.isHidden(columnName)) {
      hiddenColumns.push(columnName);
    } else {
      hiddenColumns.splice(hiddenColumns.indexOf(columnName), 1);
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.keys, event.previousIndex, event.currentIndex);
  }
}

