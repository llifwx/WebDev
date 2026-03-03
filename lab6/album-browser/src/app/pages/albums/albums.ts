import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { Observable } from 'rxjs';
import { Album } from '../../models/album.model';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-albums',
  imports: [CommonModule, RouterLink],
  templateUrl: './albums.html',
  styleUrl: './albums.css',
})
export class AlbumsComponent {
    protected albums : Album[] | null = null;

  constructor(private albumService: AlbumService, private cdr : ChangeDetectorRef) { }

  ngOnInit() {
    this.albumService.getAlbums().subscribe({
      next: (data) => {
        this.albums = data;
        this.cdr.markForCheck();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  deleteAlbum(id: number) {
    const updated = this.albums!.filter(a => a.id !== id);
    this.albumService.deleteAlbum(id).subscribe({
      next: () => {
        this.albums = updated;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Delete failed', err);
      }, 
    });
  }

  // deleteAlbum(id: number, event: MouseEvent) {
  //   event.stopPropagation();

  //   this.albumService.deleteAlbum(id).subscribe({
  //     next: () => {
  //       this.albums = this.albums.filter(a => a.id !== id); // локально убираем
  //     },
  //     error: () => {
  //       this.error = 'Delete failed (API is fake but should still return OK)';
  //     },
  //   });
  // }
}




// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { Router } from '@angular/router';
// import { AlbumService } from '../../services/album.service';
// import { Album } from '../../models/album.model';
// import { finalize } from 'rxjs/operators';

// @Component({
//   standalone: true,
//   selector: 'app-albums',
//   imports: [CommonModule],
//   templateUrl: './albums.html',
//   styleUrl: './albums.css',
// })
// export class AlbumsComponent implements OnInit {
//   loading = true;
//   albums: Album[] = [];
//   error = '';

//   constructor(private albumService: AlbumService, private router: Router) {}

//   ngOnInit(): void {
//   this.loading = true;
//   this.error = '';

//   this.albumService.getAlbums()
//     .pipe(finalize(() => (this.loading = false)))
//     .subscribe({
//       next: (data) => {
//         this.albums = data;
//       },
//       error: (err) => {
//         console.error(err);
//         this.error = 'Failed to load albums';
//       }
//     });
// }

//   openAlbum(id: number) {
//     this.router.navigate(['/albums', id]);
//   }

//   deleteAlbum(id: number, event: MouseEvent) {
//     event.stopPropagation();

//     this.albumService.deleteAlbum(id).subscribe({
//       next: () => {
//         this.albums = this.albums.filter(a => a.id !== id); // локально убираем
//       },
//       error: () => {
//         this.error = 'Delete failed (API is fake but should still return OK)';
//       },
//     });
//   }
// }
