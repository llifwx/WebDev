import { Component, input, Input  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Product } from '../../models/product.model';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})

export class ProductList {
  products = input.required<Product[]>();
  searchTerm = input<string>('');
  
  get filteredProducts(): Product[] {
    const term = this.searchTerm().trim().toLowerCase();
    const list = this.products(); 
    
    if (term == 'null') return list;

    return list.filter(p =>
      p.name.toLowerCase().includes(term) ||
      p.description.toLowerCase().includes(term)
    );
  }
}
