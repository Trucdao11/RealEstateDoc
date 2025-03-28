import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { NewEditProductComponent } from '../new-edit-product/new-edit-product.component';
import { ServiceService } from '../service.service';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  @Input() totalPages = 0;
  @Input() totalCount = 0;
  @Input() searchValue = '';

  readonly dialog = inject(MatDialog);
  products: Product[] = [];
  currentPage: number = 1;
  limit: number = 10;
  filteredProducts: Product[] = [];

  constructor(private services: ServiceService) {}

  ngOnInit() {
    this.initData();
  }

  initData() {
    this.fetchProducts();
  }

  ngOnChanges() {
    this.filterProducts();
  }

  openDialog(state: string, item?: Product) {
    const dialogRef = this.dialog.open(NewEditProductComponent, {
      data: {
        action: state,
        detailItem: item,
      },
      width: '90vh',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result?.status === 'remove') {
        this.deleteProduct(result.productId);
      } else if (result?.status === 'update') this.fetchProducts(); // Chỉ gọi khi dialog đóng
    });
  }

  fetchProducts(page: number = this.currentPage) {
    this.services.getProductsPagination(page).subscribe(
      (products) => {
        this.products = products.body || [];
        this.filteredProducts = [...this.products];
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.fetchProducts(page);
    }
  }

  deleteProduct(productId: string) {
    this.products = this.products.filter((res) => {
      return res.id !== productId;
    });
  }

  addProduct() {
    this.openDialog('add');
  }

  filterProducts() {
    const term = this.searchValue.toLowerCase();
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(term)
    );
  }
}
