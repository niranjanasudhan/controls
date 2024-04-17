import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-kendo',
  templateUrl: './kendo.component.html',
  styleUrls: ['./kendo.component.css']
})
export class KendoComponent {
  public selectedItem=0;
  @Output() closeSideNav = new EventEmitter();

  constructor(
    private router:Router,
    
    ) { }

   onToggleClose() {
    this.closeSideNav.emit();
}

  ngOnInit() {
  }



    public navItems = [
      // {
      //   title: 'Button',
      //   route: '/kendo/',
       
      // },
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
      route: '/kendo/wizard',
     
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