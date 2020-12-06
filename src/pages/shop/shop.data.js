// Hats

import brown from '../../img/hats/brown-brim.png';
import blue from '../../img/hats/blue-beanie.png';
import cowboy from '../../img/hats/brown-cowboy.png';
import grey from '../../img/hats/grey-brim.png';
import green from '../../img/hats/green-beanie.png';
import Palm from '../../img/hats/palm-tree-cap.png';
import red from '../../img/hats/red-beanie.png';
import wolf from '../../img/hats/wolf-cap.png';
import snap from '../../img/hats/blue-snapback.png';

// Sneakers
import adidas from '../../img/sneakers/adidas-nmd.png';
import yeezy from '../../img/sneakers/yeezy.png';
import black from '../../img/sneakers/black-converse.png';
import white from '../../img/sneakers/white-nike-high-tops.png';
import nikes from '../../img/sneakers/nikes-red.png';
import nike from '../../img/sneakers/nike-brown.png';
import jordan from '../../img/sneakers/nike-funky.png';
import Timberlands from '../../img/sneakers/timberlands.png';

// Jackets
import jean from '../../img/jackets/black-shearling.png';
import blueJean from '../../img/jackets/blue-jean-jacket.png';
import greyJean from '../../img/jackets/grey-jean-jacket.png';
import brownJean from '../../img/jackets/brown-shearling.png';
import tan from '../../img/jackets/brown-trench.png';

// Women
import tanktop from '../../img/womens/blue-tank.png';
import Floral from '../../img/womens/floral-blouse.png';
import dress from '../../img/womens/floral-skirt.png';
import dots from '../../img/womens/red-polka-dot-dress.png';
import sweater from '../../img/womens/striped-sweater.png';
import yellow from '../../img/womens/yellow-track-suit.png';
import blouse from '../../img/womens/white-vest.png';

// Men
import camo from '../../img/mens/camo-vest.png';
import tFloral from '../../img/mens/floral-shirt.png';
import long from '../../img/mens/long-sleeve.png';
import pink from '../../img/mens/pink-shirt.png';
import roll from '../../img/mens/roll-up-jean-shirt.png';
import polka from '../../img/mens/polka-dot-shirt.png';


const SHOP_DATA = [
  {
    id: 1,
    title: 'Hats',
    routeName: 'hats',
    items: [
      {
        id: 1,
        name: 'Brown Brim',
        //imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
        imageUrl: brown,
        price: 25
      },
      {
        id: 2,
        name: 'Blue Beanie',
        //imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
        imageUrl: blue,
        price: 18
      },
      {
        id: 3,
        name: 'Brown Cowboy',
        //imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
        imageUrl: cowboy,
        price: 35
      },
      {
        id: 4,
        name: 'Grey Brim',
        //imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
        imageUrl: grey,
        price: 25
      },
      {
        id: 5,
        name: 'Green Beanie',
        //imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
        imageUrl: green,
        price: 18
      },
      {
        id: 6,
        name: 'Palm Tree Cap',
        //imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
        imageUrl: Palm,
        price: 14
      },
      {
        id: 7,
        name: 'Red Beanie',
        //imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
        imageUrl: red,
        price: 18
      },
      {
        id: 8,
        name: 'Wolf Cap',
        //imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
        imageUrl: wolf,
        price: 14
      },
      {
        id: 9,
        name: 'Blue Snapback',
        //imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
        imageUrl: snap,
        price: 16
      }
    ]
  },
  {
    id: 2,
    title: 'Sneakers',
    routeName: 'sneakers',
    items: [
      {
        id: 10,
        name: 'Adidas NMD',
        // imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
        imageUrl: adidas, 
        price: 220
      },
      {
        id: 11,
        name: 'Adidas Yeezy',
        // imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
        imageUrl: yeezy,
        price: 280
      },
      {
        id: 12,
        name: 'Black Converse',
        // imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
        imageUrl: black,
        price: 110
      },
      {
        id: 13,
        name: 'Nike White AirForce',
        // imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
        imageUrl: white,
        price: 160
      },
      {
        id: 14,
        name: 'Nike Red High Tops',
        // imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
        imageUrl: nikes,
        price: 160
      },
      {
        id: 15,
        name: 'Nike Brown High Tops',
        // imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
        imageUrl: nike,
        price: 160
      },
      {
        id: 16,
        name: 'Air Jordan Limited',
        // imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
        imageUrl: jordan,
        price: 190
      },
      {
        id: 17,
        name: 'Timberlands',
        // imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
        imageUrl: Timberlands,
        price: 200
      }
    ]
  },
  {
    id: 3,
    title: 'Jackets',
    routeName: 'jackets',
    items: [
      {
        id: 18,
        name: 'Black Jean Shearling',
        // imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
        imageUrl: jean,
        price: 125
      },
      {
        id: 19,
        name: 'Blue Jean Jacket',
        // imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
        imageUrl: blueJean,
        price: 90
      },
      {
        id: 20,
        name: 'Grey Jean Jacket',
        // imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
        imageUrl: greyJean,
        price: 90
      },
      {
        id: 21,
        name: 'Brown Shearling',
        // imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
        imageUrl: brownJean,
        price: 165
      },
      {
        id: 22,
        name: 'Tan Trench',
        // imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
        imageUrl: tan,
        price: 185
      }
    ]
  },
  {
    id: 4,
    title: 'Womens',
    routeName: 'womens',
    items: [
      {
        id: 23,
        name: 'Blue Tanktop',
        // imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
        imageUrl: tanktop,
        price: 25
      },
      {
        id: 24,
        name: 'Floral Blouse',
        // imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
        imageUrl: Floral,
        price: 20
      },
      {
        id: 25,
        name: 'Floral Dress',
        // imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
        imageUrl: dress,
        price: 80
      },
      {
        id: 26,
        name: 'Red Dots Dress',
        // imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
        imageUrl: dots,
        price: 80
      },
      {
        id: 27,
        name: 'Striped Sweater',
        // imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
        imageUrl: sweater,
        price: 45
      },
      {
        id: 28,
        name: 'Yellow Track Suit',
        // imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
        imageUrl: yellow,
        price: 135
      },
      {
        id: 29,
        name: 'White Blouse',
        // imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
        imageUrl: blouse,
        price: 20
      }
    ]
  },
  {
    id: 5,
    title: 'Mens',
    routeName: 'mens',
    items: [
      {
        id: 30,
        name: 'Camo Down Vest',
        // imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
        imageUrl: camo,
        price: 325
      },
      {
        id: 31,
        name: 'Floral T-shirt',
        // imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
        imageUrl: tFloral,
        price: 20
      },
      {
        id: 32,
        name: 'Black & White Longsleeve',
        // imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
        imageUrl: long,
        price: 25
      },
      {
        id: 33,
        name: 'Pink T-shirt',
        // imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
        imageUrl: pink,
        price: 25
      },
      {
        id: 34,
        name: 'Jean Long Sleeve',
        // imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
        imageUrl: roll,
        price: 40
      },
      {
        id: 35,
        name: 'Burgundy T-shirt',
        // imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
        imageUrl: polka,
        price: 25
      }
    ]
  }
];

export default SHOP_DATA;
