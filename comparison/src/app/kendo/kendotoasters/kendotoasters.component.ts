import { Component } from '@angular/core';
import { NotificationService } from '@progress/kendo-angular-notification';

@Component({
  selector: 'app-kendotoasters',
  templateUrl: './kendotoasters.component.html',
  styleUrls: ['./kendotoasters.component.css']
})
export class KendotoastersComponent {
  constructor(private notificationService: NotificationService) {}

  public show(): void {
    this.notificationService.show({
      content: "Your data has been saved. Time for tea!",
      cssClass: "button-notification",
      animation: { type: "slide", duration: 400 },
      position: { horizontal: "center", vertical: "bottom" },
      type: { style: "success", icon: true },
      closable: true,
    });
  }
}
