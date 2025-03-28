import { Component } from '@angular/core';
import { ServiceService } from './service.service';
import { Product } from './interfaces/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'RealEstateDocApp';
  
}
