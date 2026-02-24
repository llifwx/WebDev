import { Component } from '@angular/core';
import { ProductList } from './components/product-list/product-list';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  searchTerm = '';

  categories: Category[] = [];
  selectedCategoryId: number | null = null;
  selectedProducts: Product[] = [];

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
    this.categories = [{id: -1, name : 'All'}, ...this.categories];
  }

  selectCategory(id: number) {

    if (this.selectedCategoryId === -1) {
      this.selectedProducts = this.productService.getProducts();
    } else {
      this.selectedCategoryId = id;
      this.selectedProducts = [...this.productService.getProductsBycategoryId(id)];
    }

  }
}
