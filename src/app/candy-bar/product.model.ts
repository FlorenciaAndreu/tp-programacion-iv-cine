import { CategoryModel } from './category.model';

// Interface de TypeScript para definir la estructura de un producto del Candy Bar.
export interface ProductModel {
    id: number;
    name: string;
    price: number;
    category: CategoryModel;
    imageUrl?: string;
}