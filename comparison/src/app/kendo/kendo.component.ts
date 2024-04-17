import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-kendo',
  templateUrl: './kendo.component.html',
  styleUrls: ['./kendo.component.css']
})
export class KendoComponent {
  @Output() closeSideNav = new EventEmitter();

  constructor() { }

   onToggleClose() {
    this.closeSideNav.emit();
}

  ngOnInit() {
  }



    public navItems = [
      {
        title: 'Button',
        route: '/kendo/',
       
      },
    {
      title: 'Button',
      route: '/kendo/button',
     
    },
    {
      title: 'Dropdown',
      route: '/kendo/dropdown',
     
    },
    {
      title: 'Date Inputs',
      route: '/kendo/dateinputs',
     
    },
    {
      title: 'Textbox',
      route: '/kendo/textbox',
     
    },
    {
      title: 'Icon',
      route: '/kendo/icon',
     
    },
    {
      title: 'Progressbar',
      route: '/kendo/progressbar',
     
    },
    {
      title: 'Pager',
      route: '/kendo/pager',
     
    },
    {
      title: 'Dialogs',
      route: '/kendo/dialogs',
      },
    {
      title: 'Stepper',
      route: '/kendo/stepper',
     
    },
    {
      title: 'Radio Button',
      route: '/kendo/radiobutton',
     
    },
    {
      title: 'Toggle',
      route: '/kendo/toggle',
     
    },
    {
      title: 'Checkbox',
      route: '/kendo/checkbox',
     
    },
    {
      title: 'Tooltip',
      route: '/kendo/tooltip',
     
    },
    {
      title: 'Popup',
      route: '/kendo/popup',
     
    },
    {
      title: 'Menu',
      route: '/kendo/menu',
     
    },
    {
      title: 'Tab',
      route: '/kendo/tab',
     
    },
    {
      title: 'Accordion',
      route: '/kendo/accordion',
     
    },
  ];
  
}