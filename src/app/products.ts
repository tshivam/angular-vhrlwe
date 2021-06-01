export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: '10 GPU Rig',
    price: 500000,
    description: 'A GPU mining rig consisting of 10 GTX 1660 Super'
  },
  {
    id: 2,
    name: '6 GPU Rig',
    price: 320000,
    description: 'A GPU mining rig consisting of 6 GTX 1660 Super'
  },
  {
    id: 3,
    name: '4 GPU Rig',
    price: 250000,
    description: ''
  }
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
