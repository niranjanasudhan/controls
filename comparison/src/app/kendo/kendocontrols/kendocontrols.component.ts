import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-kendocontrols',
  templateUrl: './kendocontrols.component.html',
  styleUrls: ['./kendocontrols.component.css']
})
export class KendocontrolsComponent implements OnInit, OnDestroy {
  public checked = true;

  public labelhide = {
    visible: false,
};

  value: number = 0;
  running: any;

  constructor() { }

  ngOnInit(): void {
    this.running = setInterval(() => {
      if (this.value < 45) {
        this.value++;
      } else {
        this.stopProgress();
      }
    }, 50);
  }

  stopProgress() {
    clearInterval(this.running);
  }

  ngOnDestroy() {
    this.stopProgress();
  }


}
