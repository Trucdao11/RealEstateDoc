import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { NewEditProductComponent } from '../new-edit-product/new-edit-product.component';


@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  readonly dialog = inject(MatDialog);
  openDialog() {
    this.dialog.open(NewEditProductComponent, {
      data: {
        action: 'view'
      }
    });
  }

}
