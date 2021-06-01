export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  img: string;
}

export const products = [
  {
    id: 1,
    name: '10 GPU Rig',
    price: 500000,
    description: 'A GPU mining rig consisting of 10 GTX 1660 Super',
    img:
      'https://images-na.ssl-images-amazon.com/images/I/81nbugDQ1lL._SL1500_.jpg'
  },
  {
    id: 2,
    name: '6 GPU Rig',
    price: 320000,
    description: 'A GPU mining rig consisting of 6 GTX 1660 Super',
    img:
      'https://images-na.ssl-images-amazon.com/images/I/71EVunv9GaL._AC_SL1200_.jpg'
  },
  {
    id: 3,
    name: '4 GPU Rig',
    price: 250000,
    description: 'A GPU mining rig consisting of 4 GTX 1660 Super',
    img: 'https://i.redd.it/871cd2t0b8531.jpg'
  }
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
