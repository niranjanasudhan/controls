import { Component } from '@angular/core';
import { SchedulerEvent } from "@progress/kendo-angular-scheduler";
import { sampleData, displayDate } from "./events-utc";
@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.css']
})
export class PlannerComponent {
  public selectedDate: Date = displayDate;
  public events: SchedulerEvent[] = sampleData;
}
