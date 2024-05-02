import { Component, OnInit, OnDestroy  } from '@angular/core';

@Component({
  selector: 'app-kendoprogressbar',
  templateUrl: './kendoprogressbar.component.html',
  styleUrls: ['./kendoprogressbar.component.css']
})
export class KendoprogressbarComponent implements OnInit, OnDestroy {
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
