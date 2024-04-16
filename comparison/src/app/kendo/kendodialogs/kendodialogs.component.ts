import { Component } from '@angular/core';

@Component({
  selector: 'app-kendodialogs',
  templateUrl: './kendodialogs.component.html',
  styleUrls: ['./kendodialogs.component.css']
})
export class KendodialogsComponent {
  public opened = true;

  public close(status: string): void {
    console.log(`Dialog result: ${status}`);
    this.opened = false;
  }

  public open(): void {
    this.opened = true;
  }
}