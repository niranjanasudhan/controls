import { Component } from '@angular/core';
import {PageEvent, MatPaginatorModule} from '@angular/material/paginator';
@Component({
  selector: 'app-materialpaginator',
  templateUrl: './materialpaginator.component.html',
  styleUrls: ['./materialpaginator.component.css']
})

export class MaterialpaginatorComponent {
  length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;
  pageEvent: PageEvent;
  
 

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }
}
