import { Directive, ElementRef } from '@angular/core';
import { GridComponent } from '@progress/kendo-angular-grid';

@Directive({
  selector: '[appDataBinding]'
})
export class DataBindingDirective {
  constructor(private el: ElementRef) { }

  getGridElement(): HTMLElement {
    // Assuming grid is a direct child of the directive element
    return this.el.nativeElement.querySelector('.k-grid') as HTMLElement;
  }
}
