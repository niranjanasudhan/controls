import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent {
  public selectedItem=0;

  constructor(
    private router:Router,
    
    ) { }
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
  handleClick(selectedItem:any) {
    console.log(selectedItem);
    this.selectedItem=selectedItem;
   
  }
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if(event.key === 'ArrowUp')
      {
        if(this.selectedItem<(this.navItems.length)&&this.selectedItem>0)
          {

            this.router.navigate([this.navItems[this.selectedItem-1].route]);
            this.selectedItem=this.selectedItem-1;
          console.log(event.keyCode);
            console.log(event.keyCode);
          
      }
      }
      if(event.key === 'ArrowDown')
        {
          if(this.selectedItem>=0&&this.selectedItem<this.navItems.length)
            {


              this.router.navigate([this.navItems[this.selectedItem+1].route]);
              this.selectedItem=this.selectedItem+1;
              console.log(event.keyCode);

         
            
        }
        }
     
  }
  
}
