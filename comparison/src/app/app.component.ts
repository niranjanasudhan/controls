import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'comparison';

  sidebarOpen: boolean = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
    console.log('New sidebarOpen value:', this.sidebarOpen); // Log the new value
    localStorage.setItem('sidebarOpen', this.sidebarOpen.toString());
    console.log('Stored in localStorage:', localStorage.getItem('sidebarOpen')); // Log the value stored in localStorage
  }
}
