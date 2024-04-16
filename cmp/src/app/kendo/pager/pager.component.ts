import { Component } from '@angular/core';
import { destinations, Destination } from "./destinations";
import { PageChangeEvent } from '@progress/kendo-angular-dropdowns/common/models/page-change-event';
@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css']
})
export class PagerComponent {
  public pageSize = 8;
  public skip = 0;
  public pagedDestinations: Destination[] = [];
  public total = destinations.length;
  public contentId = "content-1";

  public ngOnInit(): void {
    this.pageData();
  }

  public onPageChange(e: PageChangeEvent): void {
    this.skip = e.skip;
    this.pageSize = e.take;
    this.pageData();
  }

  private pageData(): void {
    this.pagedDestinations = destinations.slice(
      this.skip,
      this.skip + this.pageSize
    );
  }
}
