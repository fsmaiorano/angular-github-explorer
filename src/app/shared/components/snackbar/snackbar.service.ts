import { Injectable } from "@angular/core";
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition
} from "@angular/material";

@Injectable({
  providedIn: "root"
})
export class SnackbarService {
  private duration: 100;
  private horizontalPosition: MatSnackBarHorizontalPosition = "right";
  private verticalPosition: MatSnackBarVerticalPosition = "top";

  constructor(private snackBar: MatSnackBar) {}

  open(message) {
    this.snackBar.open(message, "❌", {
      duration: this.duration,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition
    });
  }
}
