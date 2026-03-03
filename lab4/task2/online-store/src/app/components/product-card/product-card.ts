import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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
  @Output() delete = new EventEmitter<number>();
  @Input() product!: Product;

  selectedImage = '';
  liked : boolean = false;
  likes : number = 0;

  ngOnInit(): void {
    this.selectedImage = this.product.image || this.product.images?.[0] || '';
    this.likes = this.product.likes;
  }

  selectImage(img: string) {
    this.selectedImage = img;
  }

  onDelete(): void {
  const confirmDelete = confirm('Delete this product?');
  if (confirmDelete) {
    this.delete.emit(this.product.id);
  }
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

  stars(): { filled: boolean }[] {
    const r = Math.round(this.product.rating); 
    return Array.from({ length: 5 }, (_, i) => ({ filled: i < r }));
  }

  expanded = false;

  toggleExpand() {
    this.expanded = !this.expanded;
  }

  toggleLike() : void {
    if (!this.liked) {
      this.likes += 1;
    }
    else {
      this.likes -= 1;
    }

    this.liked = !this.liked;
  }
}
