export interface Saree {
  id: string;
  name: string;
  price: number;
  category: 'Silk' | 'Cotton' | 'Bridal' | 'Party Wear';
  image: string;
  description: string;
}

export interface CartItem extends Saree {
  quantity: number;
}