import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
  standalone: true,
  selector: 'app-album-detail',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './album-detail.html',
  styleUrl: './album-detail.css',
})
export class AlbumDetailComponent implements OnInit {
  loading = true;
  album: Album | null = null;
  titleDraft = '';
  error = '';

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService,
    private cdr : ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id).subscribe({
      next: (a) => {
        this.album = a;
        this.titleDraft = a.title;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.error = 'Failed to load album';
        this.loading = false;
      },
    });
  }

  save() {
    if (!this.album) return;

    const updated: Album = { ...this.album, title: this.titleDraft };
    this.albumService.updateAlbum(updated).subscribe({
      next: (res) => {
        this.album = res;
        this.cdr.detectChanges(); // обновляем UI
      },
      error: () => {
        this.error = 'Save failed';
      },
    });
  }
}
