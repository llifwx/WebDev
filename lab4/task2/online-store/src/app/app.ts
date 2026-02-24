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
  selectedCategoryId: number = 0;
  selectedProducts: Product[] = [];

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
    this.categories = [{id: 0, name : 'All'}, ...this.categories];
  }

  ngOnInit() {
    this.selectedProducts = [...this.productService.getProducts()];
  }

  public selectCategory (id: number) {
    if (id === 0) {
      this.selectedCategoryId = id;
      this.selectedProducts = this.productService.getProducts();
    } else {
      this.selectedCategoryId = id;
      this.selectedProducts = [...this.productService.getProductsBycategoryId(id)];
    }
  }
}
