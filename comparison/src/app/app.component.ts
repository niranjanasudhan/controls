import { Component } from '@angular/core';
import { SharedService } from './shared.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'comparison';

  sidebarOpen: boolean = false;

  constructor(private sharedService: SharedService) {}

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
    this.sharedService.menuToggle.next(this.sidebarOpen);
  }
}
