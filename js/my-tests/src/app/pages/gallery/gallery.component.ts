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
      {src:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Girolamo_Francesco_Maria_Mazzola_-_Madonna_with_the_Long_Neck.jpg/1024px-Girolamo_Francesco_Maria_Mazzola_-_Madonna_with_the_Long_Neck.jpg',
      description: 'Didascalia per la seconda immagine'},
      {src:'https://enjoy.vivi.city/images/enjoyvivicity/Leonardo-da-vinci/Annunciazione-dipinto.jpg',
      description: 'Didascalia per la terza immagine'},
      {src:'https://corato.gocity.it/library/media/giorgio_de_chirico_piazza_ditalia_met_anni_50_olio_su_tela_40_x_50.jpg',
      description: 'Didascalia per la quarta immagine'},
      {src:'https://lasottilelineadombrablog.files.wordpress.com/2015/03/enigma-dellarrivo-de-chirico.jpg',
      description: 'Didascalia per la quinta immagine'},
      {src:'https://www.ilgiornaledellarte.com/immagini/IMG202310091904088_1000.jpeg',
      description: 'Didascalia per la sesta immagine'},
      {src:'https://www.artribune.com/wp-content/uploads/2018/08/Pablo-Picasso-.jpg',
      description: 'Didascalia per la settima immagine'},
      {src:'https://www.arteopereartisti.it/wp-content/uploads/2021/02/ld-hm-home.jpg',
      description: 'Didascalia per la 8 immagine'},
      {src:'https://finestresullarte.b-cdn.net/rivista/immagini/2021/fn/henri-matisse-la-stanza-rossa.jpg',
      description: 'Didascalia per la 9 immagine'},
      {src:'https://images.contentstack.io/v3/assets/blt9c15dfff665e6dc0/blt1cfaba4521e47dfb/piatto_Matisse.jpeg',
      description: 'Didascalia per la 10 immagine'},
      {src:'https://www.finestresullarte.info/rivista/immagini/2021/fn/vasilij-kandinskij-giallo-rosso-blu.jpg',
      description: 'Didascalia per la 11 immagine'},
      {src:'https://arthive.net/res/media/img/oy800/work/4b8/287087@2x.jpeg',
      description: 'Didascalia per la 12 immagine'},
    ];
    this.items = images.map(img => new ImageItem({ src: img.src, alt:img.description }));
  }

}

