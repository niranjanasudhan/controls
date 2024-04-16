import { Component } from '@angular/core';

@Component({
  selector: 'app-kendoprogressbar',
  templateUrl: './kendoprogressbar.component.html',
  styleUrls: ['./kendoprogressbar.component.css']
})
export class KendoprogressbarComponent {
  public value = 0;
  public running: any;
  
  public startProgress(): void {
    this.running = setInterval(() => {
      if (this.value <= 100) {
        this.value++;
      } else {
        this.stopProgress();
      }
    }, 50);
  }
  
  public stopProgress(): void {
    if (this.running) {
      clearInterval(this.running);
      this.running =null;
    }
  }
  
  public resetProgress(): void {
    this.value = 0;
    this.stopProgress();
  }
}
