import {
  ChangeDetectionStrategy,
  Component,
  inject,
  model,
  signal,
} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProductListComponent } from '../product-list/product-list.component';
import { Product } from '../interfaces/product';
import { UploadService } from '../upload.service';
import { ServiceService } from '../service.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
@Component({
  selector: 'app-new-edit-product',
  standalone: false,
  templateUrl: './new-edit-product.component.html',
  styleUrl: './new-edit-product.component.scss',
})
export class NewEditProductComponent {
  readonly dialogRef = inject(MatDialogRef<NewEditProductComponent>);
  readonly data = inject<any>(MAT_DIALOG_DATA);
  readonly dialog = inject(MatDialog);
  status = '';
  item = {} as Product ;
  isEdit = false;
  selectedFile: File | null = null;
  imageUrl: string | null = null;
  isAddNewProduct = false;

  constructor(private uploadService: UploadService, private services: ServiceService) {}
  ngOnInit() {
    this.status = this.data.action;

    if(this.status == 'add'){
      this.isAddNewProduct = true;
      this.isEdit = true;
    }
   
    if (this.status == 'view' && !this.isAddNewProduct) {
      this.item = this.data.detailItem;
    }

  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;

      const reader = new FileReader();
      reader.onload = (e) => this.imageUrl = e.target?.result as string;
      reader.readAsDataURL(file);
      this.uploadImage()
    }
  }

  uploadImage(): void {
    if (this.selectedFile) {
      this.uploadService.uploadImage(this.selectedFile).subscribe(response => {
        this.imageUrl = response.imageUrl;
        this.imageUrl = response.imageUrl
      }, error => {
        console.error('Upload failed:', error);
      });
    }
  }

  editProduct(){
    this.services.updateProduct(this.item.id, this.item).subscribe(res => {
      this.dialogRef.close({
        status: 'update',
      });
    })
  }

  remove(){
    if (!this.item) return;
    const dialogRef = this.dialog.open(ConfirmDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dialogRef.close({
          status: 'remove',
          productId: this.item?.id
        });
      }
    });
  }

  saveNewProduct(){
    if (this.item) {
      this.item.imageUrl = this.imageUrl ?? '';      
      this.item.price = Number(this.item.price) || 0;
      this.item.quantity = Number(this.item.quantity) || 0;
    }
    this.services.addProduct(this.item).subscribe(
      (response) => {
        console.log('Sản phẩm đã được thêm:', response);
        this.dialogRef.close({ status: 'success', product: response });
      },
      (error) => {
        console.error('Lỗi khi thêm sản phẩm:', error);
      }
    );
  }
}
