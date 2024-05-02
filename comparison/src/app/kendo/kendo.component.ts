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
      route: ['/kendo/button','/kendo/'],
      icon: true
    },
    {
      title: 'Radio Button',
      route: '/kendo/radiobutton',
      icon: true
    },
    {
      title: 'Toggle',
      route: '/kendo/toggle',
      icon: true
    },
    {
      title: 'Checkbox',
      route: '/kendo/checkbox',
      icon: true
    },
    {
      title: 'Progressbar',
      route: '/kendo/progressbar',
      icon: true
    },
    {
      title: 'Badges',
      route: '/kendo/badges',
      icon: true
    },
    {
      title: 'Tab',
      route: '/kendo/tab',
      icon: true
    },
    {
      title: 'Stepper',
      route: '/kendo/wizard',
      icon: true
    },
    {
      title: 'Tree list',
      route: '/kendo/treelist',
      icon: true
    },
    {
      title: 'Dropdown',
      route: '/kendo/dropdown',
      icon: true
    },
    {
      title: 'Textbox',
      route: '/kendo/textbox',
      icon: true
    },
    {
      title: 'Date Inputs',
      route: '/kendo/dateinputs',
     
    },
    {
      title: 'Tooltip',
      route: '/kendo/tooltip',
     
    },
    {
      title: 'Loader',
      route: '/kendo/loader',
     
    },
    {
      title: 'Toasters',
      route: '/kendo/toasters',
     
    },
    {
      title: 'Menu',
      route: '/kendo/menu',
     
    },
    {
      title: 'Dialogs',
      route: '/kendo/dialogs',
      },
      {
        title: 'Popup',
        route: '/kendo/popup',
       
      },
    {
      title: 'Accordion',
      route: '/kendo/accordion',
     
    },
    {
      title: 'Icon',
      route: '/kendo/icon',
     
    },
    {
      title: 'Pager',
      route: '/kendo/pager',
     
    },
    {
      title: 'Chat',
      route: '/kendo/chat',
     
    },
    {
      title: 'Attachment',
      route: '/kendo/attachment',
     
    },
    {
      title: 'QR Code',
      route: '/kendo/qrcode',
     
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