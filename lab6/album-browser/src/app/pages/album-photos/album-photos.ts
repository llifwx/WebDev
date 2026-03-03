import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { Photo } from '../../models/photo.model';

@Component({
  standalone: true,
  selector: 'app-album-photos',
  imports: [CommonModule, RouterLink],
  templateUrl: './album-photos.html',
  styleUrl: './album-photos.css',
})
export class AlbumPhotosComponent implements OnInit {
  loading = true;
  photos: Photo[] = [];
  albumId = 0;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService,
    private cdr : ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbumPhotos(this.albumId).subscribe({
      next: (data) => {
        this.photos = data;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.error = 'Failed to load photos';
        this.loading = false;
      },
    });
  }

  back() {
    this.router.navigate(['/albums', this.albumId]);
  }
}
