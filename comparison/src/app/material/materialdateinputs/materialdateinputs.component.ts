import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatNativeDateModule, NativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { DatePickerModule } from '@progress/kendo-angular-dateinputs';
const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

@Component({
  selector: 'app-materialdateinputs',
  templateUrl: './materialdateinputs.component.html',
  styleUrls: ['./materialdateinputs.component.css'],
  standalone:true,
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],imports:[MatDatepickerModule,MatNativeDateModule]
 
})
export class MaterialdateinputsComponent {
  campaignOne = new FormGroup({
    start: new FormControl(new Date(year, month, 13)),
    end: new FormControl(new Date(year, month, 16)),
  });
  campaignTwo = new FormGroup({
    start: new FormControl(new Date(year, month, 15)),
    end: new FormControl(new Date(year, month, 19)),
  });
}