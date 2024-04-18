import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-materialtoasters',
  templateUrl: './materialtoasters.component.html',
  styleUrls: ['./materialtoasters.component.css']
})
export class MaterialtoastersComponent {
  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
