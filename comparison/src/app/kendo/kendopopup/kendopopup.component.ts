import { Component } from '@angular/core';

@Component({
  selector: 'app-kendopopup',
  templateUrl: './kendopopup.component.html',
  styleUrls: ['./kendopopup.component.css']
})
export class KendopopupComponent {
  public toggleText = "Hide";
  public show = true;

  public onToggle(): void {
    this.show = !this.show;
    this.toggleText = this.show ? "Hidе" : "Show";
  }
}