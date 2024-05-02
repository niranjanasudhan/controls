import { Component } from '@angular/core';

@Component({
  selector: 'app-kendotoggle',
  templateUrl: './kendotoggle.component.html',
  styleUrls: ['./kendotoggle.component.css']
})
export class KendotoggleComponent {
  public checked = true;
  
  public onSelectedChange(e: boolean): void {
    console.log(e);
  }
}
