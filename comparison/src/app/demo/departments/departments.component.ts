import { Component, QueryList, ViewChildren, ViewEncapsulation } from '@angular/core';
import { BreadCrumbItem } from '@progress/kendo-angular-navigation';
import { SVGIcon, arrowRotateCcwIcon, homeIcon,chevronDownIcon } from '@progress/kendo-svg-icons';
import { Survey } from './model';
import { MultipleSortSettings } from "@progress/kendo-angular-grid";
import { SortDescriptor } from "@progress/kendo-data-query";
import { ExpansionPanelComponent } from '@progress/kendo-angular-layout';
import {
  AUTO_STYLE,
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

const DEFAULT_DURATION = 300;
const defaultItems: BreadCrumbItem[] = [
  {
    text: "Accounts",
    title: "Accounts",
  },
  {
    text: "Departments",
    title: "Departments",
  }
];
@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css'],
  animations: [
    trigger('collapse', [
      state('false', style({ height: AUTO_STYLE, visibility: AUTO_STYLE })),
      state('true', style({ height: '0', visibility: 'hidden' })),
      transition('false => true', animate(DEFAULT_DURATION + 'ms ease-in')),
      transition('true => false', animate(DEFAULT_DURATION + 'ms ease-out'))
    ])
  ]
})

export class DepartmentsComponent {

  @ViewChildren(ExpansionPanelComponent)
panels!: QueryList<ExpansionPanelComponent>;

collapsed = true;

  toggle() {
    this.collapsed = !this.collapsed;
  }

  expand() {
    this.collapsed = false;
  }

  collapse() {
    this.collapsed = true;
  }


  screenWidth: number = window.innerWidth; 
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

  public gridData: Survey[] = [
    {
      Name:"Certificates",
      NoSurveyScheuled: "23",
      Expired: "15",
      In30days: "11",
      In31to60days: "",
      In61to90days: "",
      Commenced: "",
      NullCertificate: "41",
    },
    {
      Name:"Surveys",
      NoSurveyScheuled: "12",
      Expired: "29",
      In30days: "10",
      In31to60days: "",
      In61to90days: "12",
      Commenced: "14",
      NullCertificate: "",
    },
    {
      Name:"Conditions",
      NoSurveyScheuled: "09",
      Expired: "22",
      In30days: "26",
      In31to60days: "13",
      In61to90days: "",
      Commenced: "16",
      NullCertificate: "",
    },
    {
      Name:"Memos/Remarks",
      NoSurveyScheuled: "19",
      Expired: "",
      In30days: "19",
      In31to60days: "",
      In61to90days: "",
      Commenced: "23",
      NullCertificate: "",
    },
    {
      Name:"Certificates",
      NoSurveyScheuled: "23",
      Expired: "15",
      In30days: "11",
      In31to60days: "",
      In61to90days: "",
      Commenced: "",
      NullCertificate: "41",
    },
    {
      Name:"Surveys",
      NoSurveyScheuled: "12",
      Expired: "29",
      In30days: "10",
      In31to60days: "",
      In61to90days: "12",
      Commenced: "14",
      NullCertificate: "",
    },
    {
      Name:"Conditions",
      NoSurveyScheuled: "09",
      Expired: "22",
      In30days: "26",
      In31to60days: "13",
      In61to90days: "",
      Commenced: "16",
      NullCertificate: "",
    },
    {
      Name:"Memos/Remarks",
      NoSurveyScheuled: "19",
      Expired: "",
      In30days: "19",
      In31to60days: "",
      In61to90days: "",
      Commenced: "23",
      NullCertificate: "",
    },
    {
      Name:"Certificates",
      NoSurveyScheuled: "23",
      Expired: "15",
      In30days: "11",
      In31to60days: "",
      In61to90days: "",
      Commenced: "",
      NullCertificate: "41",
    },
    {
      Name:"Surveys",
      NoSurveyScheuled: "12",
      Expired: "29",
      In30days: "10",
      In31to60days: "",
      In61to90days: "12",
      Commenced: "14",
      NullCertificate: "",
    },
    {
      Name:"Conditions",
      NoSurveyScheuled: "09",
      Expired: "22",
      In30days: "26",
      In31to60days: "13",
      In61to90days: "",
      Commenced: "16",
      NullCertificate: "",
    },
    {
      Name:"Memos/Remarks",
      NoSurveyScheuled: "19",
      Expired: "",
      In30days: "19",
      In31to60days: "",
      In61to90days: "",
      Commenced: "23",
      NullCertificate: "",
    },
    {
      Name:"Certificates",
      NoSurveyScheuled: "23",
      Expired: "15",
      In30days: "11",
      In31to60days: "",
      In61to90days: "",
      Commenced: "",
      NullCertificate: "41",
    },
    {
      Name:"Surveys",
      NoSurveyScheuled: "12",
      Expired: "29",
      In30days: "10",
      In31to60days: "",
      In61to90days: "12",
      Commenced: "14",
      NullCertificate: "",
    },
    {
      Name:"Conditions",
      NoSurveyScheuled: "09",
      Expired: "22",
      In30days: "26",
      In31to60days: "13",
      In61to90days: "",
      Commenced: "16",
      NullCertificate: "",
    },
    {
      Name:"Memos/Remarks",
      NoSurveyScheuled: "19",
      Expired: "",
      In30days: "19",
      In31to60days: "",
      In61to90days: "",
      Commenced: "23",
      NullCertificate: "",
    },
    {
      Name:"Certificates",
      NoSurveyScheuled: "23",
      Expired: "15",
      In30days: "11",
      In31to60days: "",
      In61to90days: "",
      Commenced: "",
      NullCertificate: "41",
    },
    {
      Name:"Surveys",
      NoSurveyScheuled: "12",
      Expired: "29",
      In30days: "10",
      In31to60days: "",
      In61to90days: "12",
      Commenced: "14",
      NullCertificate: "",
    },
    {
      Name:"Conditions",
      NoSurveyScheuled: "09",
      Expired: "22",
      In30days: "26",
      In31to60days: "13",
      In61to90days: "",
      Commenced: "16",
      NullCertificate: "",
    },
    {
      Name:"Memos/Remarks",
      NoSurveyScheuled: "19",
      Expired: "",
      In30days: "19",
      In31to60days: "",
      In61to90days: "",
      Commenced: "23",
      NullCertificate: "",
    },
    {
      Name:"Certificates",
      NoSurveyScheuled: "23",
      Expired: "15",
      In30days: "11",
      In31to60days: "",
      In61to90days: "",
      Commenced: "",
      NullCertificate: "41",
    },
    {
      Name:"Surveys",
      NoSurveyScheuled: "12",
      Expired: "29",
      In30days: "10",
      In31to60days: "",
      In61to90days: "12",
      Commenced: "14",
      NullCertificate: "",
    },
    {
      Name:"Conditions",
      NoSurveyScheuled: "09",
      Expired: "22",
      In30days: "26",
      In31to60days: "13",
      In61to90days: "",
      Commenced: "16",
      NullCertificate: "",
    },
    {
      Name:"Memos/Remarks",
      NoSurveyScheuled: "19",
      Expired: "",
      In30days: "19",
      In31to60days: "",
      In61to90days: "",
      Commenced: "23",
      NullCertificate: "",
    },
    {
      Name:"Certificates",
      NoSurveyScheuled: "23",
      Expired: "15",
      In30days: "11",
      In31to60days: "",
      In61to90days: "",
      Commenced: "",
      NullCertificate: "41",
    },
    {
      Name:"Surveys",
      NoSurveyScheuled: "12",
      Expired: "29",
      In30days: "10",
      In31to60days: "",
      In61to90days: "12",
      Commenced: "14",
      NullCertificate: "",
    },
    {
      Name:"Conditions",
      NoSurveyScheuled: "09",
      Expired: "22",
      In30days: "26",
      In31to60days: "13",
      In61to90days: "",
      Commenced: "16",
      NullCertificate: "",
    },
    {
      Name:"Memos/Remarks",
      NoSurveyScheuled: "19",
      Expired: "",
      In30days: "19",
      In31to60days: "",
      In61to90days: "",
      Commenced: "23",
      NullCertificate: "",
    },
    
   
  ];
  public items: BreadCrumbItem[] = [...defaultItems];
  public homeIcon: SVGIcon = homeIcon;
  public chevrodownIcon: SVGIcon =chevronDownIcon;
  public rotateIcon: SVGIcon = arrowRotateCcwIcon;
  public onItemClick(item: BreadCrumbItem): void {
    const index = this.items.findIndex((e) => e.text === item.text);
    this.items = this.items.slice(0, index + 1);
  }

  public checked = true;
  public sort: SortDescriptor[] = [{ field: "productName", dir: "asc" }];

  public sortSettings: MultipleSortSettings = {
    mode: "multiple",
    initialDirection: "desc",
    allowUnsort: true,
    showIndexes: true,
  };

  public onAction(index: number): void {
    this.panels.forEach((panel, idx) => {
      if (idx !== index && panel.expanded) {
        panel.toggle();
      }
    })
  }
}
