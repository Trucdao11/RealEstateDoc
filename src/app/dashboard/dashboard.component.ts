import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  toggleProfile = false;
  readonly dialog = inject(MatDialog);
  totalCount = 0;
  totalPages = 0;
  limit = 10;
  allProducts: Product[] = [];
  searchTerm: string = '';

  constructor(private router: Router, private services: ServiceService) {}

  ngOnInit() {
    this.getAllProducts();
  }

  openProfile() {
    this.toggleProfile = !this.toggleProfile;
  }

  logout() {
    this.router.navigate(['/login']);
  }

  getAllProducts() {
    this.services.getAllProducts().subscribe(
      (products) => {
        this.allProducts = products.body || [];
        this.totalCount = this.allProducts.length;
        this.handlePage(this.totalCount);
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  handlePage(totalCount: any) {
    const quotient = parseInt((totalCount / this.limit).toString(), 10);
    const remainder = totalCount % this.limit;

    let totalPages = quotient;
    if (remainder > 0) {
      totalPages++;
    }

    this.totalPages = totalPages;
  }

  search() {
    this.searchTerm = this.searchTerm.toLowerCase();
  }
}
