import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-kendobadges',
  templateUrl: './kendobadges.component.html',
  styleUrls: ['./kendobadges.component.css']
})
export class KendobadgesComponent implements OnInit, OnDestroy {
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
