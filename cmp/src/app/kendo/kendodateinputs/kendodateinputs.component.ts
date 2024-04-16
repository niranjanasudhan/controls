import { Component } from '@angular/core';

@Component({
  selector: 'app-kendodateinputs',
  templateUrl: './kendodateinputs.component.html',
  styleUrls: ['./kendodateinputs.component.css']
})
export class KendodateinputsComponent {
  public value: Date = new Date();
  public range = { start:  new Date(), end: new Date() };
}
