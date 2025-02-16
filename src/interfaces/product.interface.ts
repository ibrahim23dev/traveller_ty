// src/interfaces/product.interface.ts
export interface IProduct {
    name: string;
    description: string;
    price: number;
    image: string;
    createdAt?: Date;
    updatedAt?: Date;
  }
  