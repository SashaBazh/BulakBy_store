export interface AddProduct {
    product_id: number;
    quantity: number;
  }
  
  export interface CartItem {
    product_id: number;
    product_name: string;
    quantity: number;
    price: number;
    product: ProductResponse;
    image?: string; // Добавлено поле image
  }
  
  export interface ProductResponse {
    id: number;
    category_id: number;
    name: string;
    description?: string;
    price: number;
    media?: string[];
  }
  
  
  export interface CartResponse {
    items: CartItem[];
    total_price: number;
  }
  