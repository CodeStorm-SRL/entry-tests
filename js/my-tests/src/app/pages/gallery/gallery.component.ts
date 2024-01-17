import { Component, OnInit, ViewChild } from '@angular/core';
import { NgFor, AsyncPipe, CommonModule } from '@angular/common';
import { GalleryModule, Gallery, GalleryItem, ImageItem, GalleryImageDef } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
standalone: true,
imports: [LightboxModule, NgFor, AsyncPipe, CommonModule, GalleryModule],
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit{
  @ViewChild(GalleryImageDef, { static: true })
  imageDef!: GalleryImageDef;
  galleryId = 'myLightbox';
  items!: GalleryItem[];


  constructor(public gallery:Gallery){}

  ngOnInit() {
    const images = [
      {src:'https://upload.wikimedia.org/wikipedia/commons/d/de/Parmigianino_012.jpg',
      description: 'Didascalia per la prima immagine'},
      {src:'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
      description: 'Didascalia per la seconda immagine'},
      {src:'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
      description: 'Didascalia per la terza immagine'},
      {src:'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
      description: 'Didascalia per la quarta immagine'},
      {src:'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
      description: 'Didascalia per la quinta immagine'},
      {src:'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
      description: 'Didascalia per la sesta immagine'},
      {src:'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg',
      description: 'Didascalia per la settima immagine'},
      {src:'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg',
      description: 'Didascalia per la 8 immagine'},
      {src:'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg',
      description: 'Didascalia per la 9 immagine'},
      {src:'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg',
      description: 'Didascalia per la 10 immagine'},
      {src:'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg',
      description: 'Didascalia per la 11 immagine'},
      {src:'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg',
      description: 'Didascalia per la 12 immagine'},
    ];
    this.items = images.map(img => new ImageItem({ src: img.src, alt:img.description }));
  }

}

