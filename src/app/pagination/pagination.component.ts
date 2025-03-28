import { Component, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: false,
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent {
  @Input() currentPage = 0;
  @Input() totalPages = 0;
  @Output() changePage: EventEmitter<number> = new EventEmitter<number>();

   constructor() {

   }

   ngOnInit() {
   }

   goToPage(page: number | string): void {
    if (typeof page === 'number' && page >= 1 && page <= this.totalPages) {
      this.changePage.emit(page);
    }
  }

  get pages(): (number | string)[] {
    if (this.totalPages <= 3) {
      return Array.from({ length: this.totalPages }, (_, i) => i + 1);
    }

    let start = Math.max(1, this.currentPage - 1);
    let end = Math.min(this.totalPages, this.currentPage + 1);

    let pages: (number | string)[] = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (end < this.totalPages) {
      pages.push('...');
      pages.push(this.totalPages);
    }

    return pages;
  }
}
