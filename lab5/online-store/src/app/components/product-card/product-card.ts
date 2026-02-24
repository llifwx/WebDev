import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard implements OnInit {
  @Input() product!: Product;

  selectedImage = '';

  ngOnInit(): void {
    this.selectedImage = this.product.image || this.product.images?.[0] || '';
  }

  selectImage(img: string) {
    this.selectedImage = img;
  }

  get whatsappShareUrl(): string {
    const text = `Check out this product: ${this.product.link}`;
    return `https://wa.me/?text=${encodeURIComponent(text)}`;
  }

  get telegramShareUrl(): string {
    return `https://t.me/share/url?url=${encodeURIComponent(
      this.product.link
    )}&text=${encodeURIComponent(this.product.name)}`;
  }

  // звезды
  stars(): { filled: boolean }[] {
    const r = Math.round(this.product.rating); // можно поменять на Math.floor
    return Array.from({ length: 5 }, (_, i) => ({ filled: i < r }));
  }

  expanded = false;

  toggleExpand() {
    this.expanded = !this.expanded;
  }
}
