import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-aggrid',
  templateUrl: './aggrid.component.html',
  styleUrls: ['./aggrid.component.css']
})
export class AggridComponent {
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
      title: 'Basic Grid',
      route: '/aggrid/',
     
    }, {
      title: 'Theme',
      route: '/aggrid/theme',
     
    },
    {
      title: 'Filter',
      route: '/aggrid/columnfilter',
     
    },
    {
      title: 'Selection',
      route: '/aggrid/selection',
     
    },{
      title: 'Editing',
      route: '/aggrid/editing',
     
    },
    // {
    //   title: 'Grouping',
    //   route: '/aggrid/grouping',
     
    // },
    {
      title: 'Master Detail',
      route: '/aggrid/masterdetail',
     
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