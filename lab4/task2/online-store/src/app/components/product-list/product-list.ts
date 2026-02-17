import { Component, Input  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Product } from '../../models/product.model';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})

export class ProductList {
  @Input() searchTerm: string = '';

  products: Product[] = [
  {
    id: 1,
    name: 'SkullPanda Winter Symphony Series',
    description: 'SkullPanda Winter Symphony Series - это коллекционная фигурка, которая является частью серии SkullPanda. Она выполнена в виде милого пандочки, одетого в зимнюю одежду и украшенного снежинками. Фигурка изготовлена из высококачественного материала и имеет детализированную окраску, что делает ее привлекательной для коллекционеров и любителей уникальных игрушек.',
    price: 3990,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p10/p7e/57884416.jpeg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p10/p7e/57884416.jpeg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pa7/p7a/57884417.jpeg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p3d/p77/57884418.jpeg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pd3/p73/57884419.jpeg?format=gallery-medium',
    ],
    link: 'https://kaspi.kz/shop/p/pop-mart-pop-mart-skullpanda-winter-symphony-series-13-5-sm-1-sht-143895400/?c=750000000'
  },
  {
    id:2,
    name: 'Wild Magic Tarot Blind Box',
    description: 'Wild Magic Tarot Blind Box - это коробка сюрприз с фигурками и картами Таро. Внутри коробки содержится случайная карта Таро и фигурка из серии Wild Magic. Коробка изготовлена из высококачественного материала и имеет яркую упаковку, что делает ее привлекательной для коллекционеров и любителей уникальных игрушек.',
    price: 13000,
    rating: 4.5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pf4/p86/93731489.jpeg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/pf4/p86/93731489.jpeg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pde/p3b/93731490.jpeg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p75/p38/93731491.jpeg?format=gallery-medium',
    ],
    link: 'https://kaspi.kz/shop/p/wild-magic-tarot-blind-box-korobka-sjurpriz-s-figurkami-i-kartoi-taro-9-sm-1-sht-154203287/?c=750000000'
  },
  {
    id:3,
    name: 'Brelok Magicheskaja Bitva',
    description: 'Brelok Magicheskaja Bitva - это стильный брелок, который может быть использован как элемент декора или аксессуар. Брелок изготовлен из высококачественного материала и имеет яркий дизайн, что делает его привлекательным для коллекционеров и любителей уникальных аксессуаров.',
    price: 8000,
    rating: 4.2,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p4b/p43/69092413.jpeg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p4b/p43/69092413.jpeg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pe1/p3f/69092414.jpeg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p78/p3c/69092415.jpeg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p0e/p39/69092416.jpeg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p43/p1c/69092420.jpeg?format=gallery-medium',
    ],
    link: 'https://kaspi.kz/shop/p/brelok-magicheskaja-bitva-14-sm-mul-tikolor-146929129/?c=750000000'
  },
  {
    id:4,
    name: 'Igrushka Podveska Pop Mart Hacipupu',
    description: 'Igrushka Podveska Pop Mart Hacipupu - это стильная подвеска, которая может быть использована как элемент декора или аксессуар. Подвеска изготовлена из высококачественного материала и имеет яркий дизайн, что делает ее привлекательной для коллекционеров и любителей уникальных аксессуаров.',
    price: 1529,
    rating: 5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/paa/p02/56643790.jpeg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/pbe/p00/56643791.jpeg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pe1/p3f/69092414.jpeg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p28/p04/56643792.jpeg?format=gallery-medium',
    ],
    link: 'https://kaspi.kz/shop/p/igrushka-podveska-pop-mart-hacipupu-13-sm-mul-tikolor-143547315/?c=750000000'
  },
  {
    id:5,
    name: 'Pop Mart Hironole Petit Prince Series',
    description: 'Pop Mart Hironole Petit Prince Series - это коллекционная серия фигурок, вдохновленная классическим произведением Антуана де Сент-Экзюпери. Каждая фигурка в этой серии имеет уникальный дизайн и высокое качество исполнения, что делает их особенно ценными для коллекционеров и любителей уникальных аксессуаров.',
    price: 14990,
    rating: 5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p40/p58/70699847.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p5c/p58/70699848.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pe4/p5a/70699850.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pc6/p5b/70699858.png?format=gallery-medium',
    ],
    link: 'https://kaspi.kz/shop/p/pop-mart-hironole-petit-prince-series-figures-11-sm-1-sht-147438560/?c=750000000'
  },
  {
    id:6,
    name: 'Pop Mart Skullpanda The Warmth',
    description: 'Pop Mart Skullpanda The Warmth - это коллекционная фигурка, которая является частью серии SkullPanda. Она выполнена в виде милого пандочки, одетого в теплую одежду и украшенного снежинками. Фигурка изготовлена из высококачественного материала и имеет детализированную окраску, что делает ее привлекательной для коллекционеров и любителей уникальных игрушек.',  
    price: 3700,
    rating: 5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p8c/p75/76250506.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p68/p78/76250511.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p85/p78/76250512.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pc4/p75/76250508.jpg?format=gallery-medium',
    ],
    link: 'https://kaspi.kz/shop/p/pop-mart-skullpanda-the-warmth-8-sm-1-sht-149092131/?c=750000000'
  },
  {
    id:7,
    name: 'Pop Mart hirono',
    description: 'Pop Mart hirono - это коллекционная фигурка, которая является частью серии Pop Mart. Она выполнена в виде милого зверька, одетого в теплую одежду и украшенного снежинками. Фигурка изготовлена из высококачественного материала и имеет детализированную окраску, что делает ее привлекательной для коллекционеров и любителей уникальных игрушек.',  
    price: 14500,
    rating: 5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p46/p23/51838049.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/pce/p25/51838051.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p06/p26/51838053.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p3f/p26/51838055.png?format=gallery-medium',
    ],
    link: 'https://kaspi.kz/shop/p/figurka-pop-mart-hirono-10-3-sm-1-sht-120978316/?c=750000000'
  },
  {
    id:8,
    name: 'Zootopia Zveropolis',
    description: 'Zootopia Zveropolis 15 sm Multikolor - это коллекционная фигурка, которая является частью серии Zootopia. Она выполнена в виде милого зверька из города Зверополиса, одетого в теплую одежду и украшенного снежинками. Фигурка изготовлена из высококачественного материала и имеет детализированную окраску, что делает ее привлекательной для коллекционеров и любителей уникальных игрушек.', 
    price: 1895,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p53/p0d/83228774.jpeg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p16/p03/83228777.jpeg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p53/p00/83228778.jpeg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pea/p09/83228775.jpeg?format=gallery-medium',
    ],
    link: 'https://kaspi.kz/shop/p/igrushka-podveska-zootopia-zveropolis-15-sm-mul-tikolor-151137596/?c=750000000'
  },
  {
    id:9,
    name: 'Pop Mart Crybaby Series',
    description: 'Pop Mart Crybaby Series - это коллекционная серия фигурок, вдохновленная классическим произведением Антуана де Сент-Экзюпери. Каждая фигурка в этой серии имеет уникальный дизайн и высокое качество исполнения, что делает их особенно ценными для коллекционеров и любителей уникальных аксессуаров.',  
    price: 2490,
    rating: 4.6,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p54/p21/44135102.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/pc4/p21/44135106.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pa8/p21/44135105.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pe0/p21/44135107.jpg?format=gallery-medium',
    ],
    link: 'https://kaspi.kz/shop/p/igrushka-podveska-pop-mart-crybaby-13-sm-mul-tikolor-140006683/?c=750000000'
  },
  {
    id:10,
    name: 'Pop Mart Skullpanda Impressionnisme Series',
    description: 'Pop Mart Skullpanda Impressionnisme Series - это коллекционная серия фигурок, вдохновленная классическим произведением Антуана де Сент-Экзюпери. Каждая фигурка в этой серии имеет уникальный дизайн и высокое качество исполнения, что делает их особенно ценными для коллекционеров и любителей уникальных аксессуаров.',  
    price: 4990,
    rating: 4,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p2f/pba/57884412.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p13/pba/57884413.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pe4/p84/57884414.jpeg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p7a/p81/57884415.jpeg?format=gallery-medium',
    ],
    link: 'https://kaspi.kz/shop/p/pop-mart-skullpanda-impressionnisme-series-13-5-sm-1-sht-143895399/?c=750000000'
  },
  {
    id:11,
    name: 'Pop Mart One Piece',
    description: 'Pop Mart One Piece 8 SM 1 Sht - это коллекционная фигурка, вдохновленная популярным аниме-сериалом "One Piece". Каждая фигурка в этой серии имеет уникальный дизайн и высокое качество исполнения, что делает их особенно ценными для коллекционеров и любителей уникальных аксессуаров.',
    price: 15000,
    rating: 0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p98/pb6/96857673.jpeg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p01/pba/96857674.jpeg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p6b/pbd/96857675.jpeg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pd5/pc0/96857676.jpeg?format=gallery-medium',
    ],
    link: 'https://kaspi.kz/shop/p/pop-mart-the-monsters-one-piece-8-sm-1-sht-154961988/?c=750000000'
  },
  {
    id:12,
    name: 'Pop Mart Hirono Little Mischief Series',
    description: 'Pop Mart Hirono Little Mischief Series - это коллекционная серия фигурок. Каждая фигурка в этой серии имеет уникальный дизайн и высокое качество исполнения, что делает их особенно ценными для коллекционеров и любителей уникальных аксессуаров.',
    price: 22900,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pac/pb0/53791276.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p89/pb3/53791281.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pa5/pb3/53791282.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p15/pb4/53791286.png?format=gallery-medium',
    ],
    link: 'https://kaspi.kz/shop/p/pop-mart-pop-mart-kollektsionnaja-figurka-hirono-little-mischief-65389-6-sm-1-sht-142733590/?c=750000000'
  }
  ];

   get filteredProducts(): Product[] {
    const q = this.searchTerm.trim().toLowerCase();
    if (!q) return this.products;

    return this.products.filter((p) => {
      const text = `${p.name} ${p.description}`.toLowerCase();
      return text.includes(q);
    });
  }
}
