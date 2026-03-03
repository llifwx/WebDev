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

  public selectCategory(id: number) {
  this.selectedCategoryId = id;

  const all = this.productService.getProducts();
  const filtered = this.productService.getProductsBycategoryId(id);

  console.log('clicked id =', id);
  console.log('ALL count =', all.length);
  console.log('FILTERED count =', filtered.length);

  if (id === 0) {
    this.selectedProducts = all;
  } else {
    this.selectedProducts = [...filtered];
  }
}
}
