import { Component, input, OnChanges, SimpleChanges } from '@angular/core';
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
export class ProductList implements OnChanges {

  products = input.required<Product[]>();
  searchTerm = input<string>('');

  localProducts: Product[] = [];

  ngOnChanges(changes: SimpleChanges) {
    this.localProducts = [...this.products()];
  }

  removeProduct(id: number): void {
    this.localProducts = this.localProducts.filter(p => p.id !== id);
  }

  get filteredProducts(): Product[] {
    const term = this.searchTerm().trim().toLowerCase();
    let list = [...this.localProducts];

    if (term) {
      list = list.filter(p =>
        p.name.toLowerCase().includes(term) ||
        p.description.toLowerCase().includes(term)
      );
    }

    return list;
  }
}