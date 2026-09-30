export interface Produto {
  id: number;
  name: string;
  brand: string;
  category: string;
  price: number;
  description: string;
  color: string;
  specifications: { label: string; value: string }[];
}
