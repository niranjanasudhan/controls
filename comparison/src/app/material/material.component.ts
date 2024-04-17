import { Component } from '@angular/core';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent {
  public navItems = [
    
    {
      title: 'Button',
      route: '/material/button',
      
     
    },
    {
      title: 'Dropdown',
      route: '/material/dropdown',
     
    },
    {
      title: 'Date Inputs',
      route: '/material/dateinputs',
     
    },
    {
      title: 'Textbox',
      route: '/material/textbox',
     
    },
    {
      title: 'Icon',
      route: '/material/icon',
     
    },
    {
      title: 'Progressbar',
      route: '/material/progressbar',
     
    },
    {
      title: 'Pager',
      route: '/material/paginator',
     
    },
    {
      title: 'Dialogs',
      route: '/material/dialogs',
      },
    {
      title: 'Stepper',
      route: '/material/wizard',
     
    },
    {
      title: 'Radio Button',
      route: '/material/radiobutton',
     
    },
    {
      title: 'Toggle',
      route: '/material/toggle',
     
    },
    {
      title: 'Checkbox',
      route: '/material/checkbox',
     
    },
    {
      title: 'Tooltip',
      route: '/material/tooltip',
     
    },
    {
      title: 'Popup',
      route: '/material/popup',
     
    },
    {
      title: 'Menu',
      route: '/material/menu',
     
    },
    {
      title: 'Tab',
      route: '/material/tab',
     
    },
    {
      title: 'Accordion',
      route: '/material/accordion',
     
    },
  ];
}
