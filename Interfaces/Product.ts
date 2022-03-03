export interface InProduct {
  name: string;
  amount: string;
}

export interface Product extends InProduct {
  id: number;
}

export interface ProductOrder extends Product {
  orderId: null | number,
}

export interface Item {
  item: Product;
}
