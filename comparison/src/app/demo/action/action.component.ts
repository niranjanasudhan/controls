import { Component, OnInit, ViewChild, HostListener, ViewEncapsulation } from '@angular/core';
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
import { GridComponent } from '@progress/kendo-angular-grid';
import { ColumnBase } from '@progress/kendo-angular-grid';
// this.filterData = [
//   {
//     text: "Heading 1",
//     items: [
//       { text: "Item 1"},
//       { text: "Item 2"},
//     ],
//   },
//   {
//     text: "Heading 2",
//     items: [
//       { text: "Item 1" },
//       { text: "Item 2" },
//       { text: "Item 3" },
//     ],
//   },
// ];
interface lastOne {
  text?: string;
  expand: false,
  item?: [{
    text?: string;
    checked:false;
  }];
}
const DEFAULT_DURATION = 300;
@Component({
  encapsulation: ViewEncapsulation.None,
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
  // public expandedKeys: any[] = ["0", "1"];
  public checkedKeys: any[] = ["0_1"];
  public expandedKeys: any[] = [];
  listChildChanged : any;
  // public checkedKeys: any[] = [];
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
public source:any[] = [];
public data:any[] = [];
public fullData:any[]=[];
public item:any[]=[];
public filterData:any[number]=[];

public hiddenColumns: string[] = [];
// public map!:lastOne[];
public map:any; 


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
        this.view.subscribe((value: any[]) => {
      this.fullData = value;
     

      this.keys = Object.keys(this.fullData[0]);
      this.data=this.keys;
      this.source=this.keys;
    
      for(let j=0;j<this.keys.length;j++) {
      let clname=this.keys[j];
     
        for (let i = 0; i < this.fullData.length; i++) {
 
            if (typeof this.fullData[i][clname] !== "undefined") {
              this.item.push( { text: this.fullData[i][clname],checked:false});
              // this.lastOne.item.text.push( this.fullData[i][clname])
            }

            }

this.filterData.push({text:clname,items:this.item,expand:false});
this.item=[];
this.map=<lastOne>this.filterData;

// this.filterData = [
//   {
//     text: "Heading 1",
//     items: [
//       { text: "Item 1"},
//       { text: "Item 2"},
//     ],
//   },
//   {
//     text: "Heading 2",
//     items: [
//       { text: "Item 1" },
//       { text: "Item 2" },
//       { text: "Item 3" },
//     ],
//   },
// ];




}

  });

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
    this.collapsedFilter=true;
    this.view.subscribe((value: any[]) => {
      this.fullData = value;
    

      this.keys = Object.keys(this.fullData[0]);

  });

  // console.log(this.view);
  }

  collapse() {
    this.collapsed = true;
    this.collapsedFilter=true;
  }
  toggleFilter() {
    this.collapsedFilter = !this.collapsedFilter;
  }



  expandFilter() {
    this.collapsedFilter = false;
    this.collapsed=true;

//   let data: any[] = [
//   {
//     text: "Heading 1",
//     items: [
//       { text: "Item 1"},
//       { text: "Item 2"},
//     ],
//   },
//   {
//     text: "Heading 2",
//     items: [
//       { text: "Item 1" },
//       { text: "Item 2" },
//       { text: "Item 3" },
//     ],
//   },
// ];
// console.log(data);

//     this.view.subscribe((value: any[]) => {


//       this.keys = Object.keys(this.fullData[0]);

// for(let j=0;j<this.keys.length;j++) {
//   let clname=this.keys[j];

// for (let i = 0; i < this.fullData.length; i++) {
 
//   if (typeof this.fullData[i][clname] !== "undefined") {
//     this.item.push(this.fullData[i][clname]);
//   }

// }

// this.filterData.push({text:clname,items:this.item});
// this.item=[];

// }

//   });


// public data: any[] = [
//   {
//     text: "Heading 1",
//     items: [
//       { text: "Item 1"},
//       { text: "Item 2"},
//     ],
//   },
//   {
//     text: "Heading 2",
//     items: [
//       { text: "Item 1" },
//       { text: "Item 2" },
//       { text: "Item 3" },
//     ],
//   },
// ];

  }

  collapseFilter() {
    this.collapsedFilter = true;
    this.collapsed=true;
  }

  public isHidden(columnName: string): boolean {
    return this.hiddenColumns.indexOf(columnName) > -1;
  }
  
  public isHiddenAll(keys: any[]) {
    let flag=false;
   for(let i=0;i<keys.length;i++) {
  
    if(this.hiddenColumns.indexOf(keys[i]) > -1)
      {
      
        flag=true;
      }
  
   }
  
   return flag;
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

  public selectAll(keys: any): void {
     const hiddenColumns = this.hiddenColumns;
for(let i=0;i<keys.length;i++) {
    if (!this.isHidden(keys[i])) {
      hiddenColumns.push(keys[i]);
    } else {
      hiddenColumns.splice(hiddenColumns.indexOf(keys[i]), 1);
    }
  }
  }


  handleFilter(value:any) {
    console.log(this.data);
    console.log(value);
    this.data = this.source.filter(
      (s) => s.toLowerCase().indexOf(value.toLowerCase()) !== -1
    );
  }


  public finalData!:any[];
  // customers = [
  //   {id: 1, name: 'Adam', data:'sdfdf'  },
  //   {id: 2, name: 'Jack', data:'sdfdf'  },
  //   {id: 3, name: 'Katherin', data:'sdfdf'  },
  //   {id: 4, name: 'John', data:'sdfdf'  },
  //   {id: 5, name: 'Watson', data:'sdfdf'  },
  //   {id: 6, name: 'Watson', data:'sdfdf'  },
  //   {id: 7, name: 'Watson', data:'sdfdf'  },
  // ];

  // drop(grid: GridComponent,event: CdkDragDrop<string[]>,col:ColumnBase) {
    drop(grid: GridComponent,event: CdkDragDrop<string[]>) {
    moveItemInArray(this.keys, event.previousIndex, event.currentIndex);
    this.keys[event.previousIndex];
   
   // grid.reorderColumn(grid.columns.get(),2);
    //grid.reorderColumn(col, event.currentIndex, { before: true });
   
  }
  

  checkMinusSquare(item:any) {
    const count = item.items.filter((x:any) => x.checked == true).length;
    let flag = false;
    if (count > 0 && count < item.items.length) {
      flag= true;
    } else if (count == 0) {
      flag= false;
    }
    return flag
  }

  checkParent(i:any) {
    this.map[i].checked = !this.map[i].checked;
    if (this.map[i].checked) {
      this.map[i].items.map((x:any) => (x.checked = true));
    } else {
      this.map[i].items.map((x:any) => (x.checked = false));
    }
    this.map[i].items.forEach((x:any) => {
      if (this.listChildChanged.findIndex((el:any) => el.id == x.id) == -1) {
        this.listChildChanged.push(x);
      }
    });
  }

  checkChild(parent_i:any, i:any) {
    this.map[parent_i].items[i].checked =
      !this.map[parent_i].items[i].checked;
    const count = this.map[parent_i].items.filter(
      (el:any) => el.checked == true
    ).length;
    if (count == this.map[parent_i].items.length) {
      this.map[parent_i].checked = true;
    } else {
      this.map[parent_i].checked = false;
    }
    if (
      this.listChildChanged.findIndex(
        (el:any) => el.id == this.map[parent_i].items[i].id
      ) == -1
    ) {
      this.listChildChanged.push(this.map[parent_i].items[i]);
    }
  }

  getListChildChanged() {
    console.log(this.listChildChanged);
  }
 
}

