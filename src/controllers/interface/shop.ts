export interface CartItems {
  id: number;
  title: string;
  cartItem: { quantity: number };
}

export interface OrderItems {
  id: number;
  products: [{ title: string; qty: number }];
}
