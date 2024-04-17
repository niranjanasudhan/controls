import { Component } from '@angular/core';
import { items } from "./menu-items";
@Component({
  selector: 'app-kendomenu',
  templateUrl: './kendomenu.component.html',
  styleUrls: ['./kendomenu.component.css']
})
export class KendomenuComponent {
  public items: any[] = items;
}
