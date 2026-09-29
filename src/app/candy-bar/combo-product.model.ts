// Interface de TypeScript para relacionar un combo con un producto del Candy Bar.
export interface ComboProductModel {
    id: number;
    comboId: number;
    productId: number;
    quantity: number;
}