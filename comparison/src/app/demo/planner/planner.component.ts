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



  
  table1Data: string[][] = [
    ['table1 1A', 'table1 1B', 'table1 1C'],
    ['table1 2A', '', 'table1 2C'],
    ['table1 3A', 'table1 3B', '']
  ];

  table2Data: string[][] = [
    ['table2 1A', '', ''],
    ['', 'table2 2B', ''],
    ['', '', 'table2 3C']
  ];

  draggedItem: string = '';
  draggedFromTable: string = '';
  draggedFromRowIndex: number = -1;
  draggedFromCellIndex: number = -1;

  onDragStart(event: DragEvent, rowIndex: number, cellIndex: number, table: string) {
    this.draggedItem = table === 'table1' ? this.table1Data[rowIndex][cellIndex] : this.table2Data[rowIndex][cellIndex];
    this.draggedFromTable = table;
    this.draggedFromRowIndex = rowIndex;
    this.draggedFromCellIndex = cellIndex;
  }

  allowDrop(event: DragEvent) {
    event.preventDefault();
  }

  onDrop(event: DragEvent, table: string) {
    event.preventDefault();
    const target = event.target as HTMLElement;
    const cell = target.closest('.table-cell') as HTMLTableCellElement;
    if (!cell) return;

    const row = cell.parentElement as HTMLTableRowElement;
    if (!row) return;

    const rowIndex = Array.from(row.parentElement!.children).indexOf(row) - 1;
    const cellIndex = Array.from(row.children).indexOf(cell);

    if (this.draggedFromTable !== table && rowIndex !== undefined && cellIndex !== undefined) {
      if (table === 'table1') {
        this.table1Data[rowIndex][cellIndex] = this.draggedItem;
      } else if (table === 'table2') {
        this.table2Data[rowIndex][cellIndex] = this.draggedItem;
      }
      if (this.draggedFromTable === 'table1') {
        this.table1Data[this.draggedFromRowIndex][this.draggedFromCellIndex] = '';
      } else if (this.draggedFromTable === 'table2') {
        this.table2Data[this.draggedFromRowIndex][this.draggedFromCellIndex] = '';
      }
      this.draggedItem = '';
      this.draggedFromTable = '';
      this.draggedFromRowIndex = -1;
      this.draggedFromCellIndex = -1;
    }
  }
}
