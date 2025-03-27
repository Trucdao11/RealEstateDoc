import {ChangeDetectionStrategy, Component, inject, model, signal} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
@Component({
  selector: 'app-new-edit-product',
  standalone: false,
  templateUrl: './new-edit-product.component.html',
  styleUrl: './new-edit-product.component.scss'
})
export class NewEditProductComponent {
  readonly dialogRef = inject(MatDialogRef<NewEditProductComponent>);
  readonly data = inject<NewEditProductComponent>(MAT_DIALOG_DATA);
  status = '';

 constructor(){

 }
  ngOnInit() {
    // this.status = th is.dat`;
    console.log("🚀 ~ NewEditProductComponent ~ data:", this.status)

  }
}
