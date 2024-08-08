import { Component } from '@angular/core';
import { SharedService } from './shared.service';
import { NavigationEnd, Router } from '@angular/router';
import { chevronLeftIcon } from "@progress/kendo-svg-icons";
import { trashIcon } from "@progress/kendo-svg-icons";
import { pencilIcon } from "@progress/kendo-svg-icons";
import { plusOutlineIcon } from "@progress/kendo-svg-icons";
import { IconSize } from "@progress/kendo-angular-icons";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'comparison';
  bgClass = 'default';
  bgClass1 = 'setnone';
  sidebarOpen: boolean = false;

  public icons = { chevronlefticon: chevronLeftIcon,trashicon:trashIcon,pencilicon:pencilIcon,plusoutline:plusOutlineIcon };
  ngAfterViewInit() {
    const googleTranslateScript = document.createElement('script');
    googleTranslateScript.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.body.appendChild(googleTranslateScript);
  }
  constructor(private sharedService: SharedService,private router:Router) {
    // subscribe to router navigation
    router.events.subscribe((val) => {
      this.router.events.subscribe(event => {
        // filter `NavigationEnd` events
        if (event instanceof NavigationEnd) {
          // get current route without leading slash `/`
          const eventUrl = /(?<=\/).+/.exec(event.urlAfterRedirects);
          console.log(eventUrl);
          const currentRoute = (eventUrl || []).join('');
          console.log(currentRoute);
          if(currentRoute=="departments")
            {
              console.log("this is department");
              this.bgClass="default"
              this.bgClass1 = "setnone";
              console.log("bgClass"+this.bgClass);
              console.log("bgClass1"+this.bgClass1)
             
            }
            else{
              console.log("this is not department");
             
              

              this.bgClass = "setnone";
              this.bgClass1 = "default";
              console.log("bgClass"+this.bgClass);
              console.log("bgClass1"+this.bgClass1)
            }
          // set bgClass property with the value of the current route
          
        }
      });
  });
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
    this.sharedService.menuToggle.next(this.sidebarOpen);
  }

  public sizes: IconSize[] = [
    
    "xxxlarge"
  ];
}
