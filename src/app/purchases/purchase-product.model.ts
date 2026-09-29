// Interface de TypeScript para relacionar una compra con un producto del Candy Bar.
export interface PurchaseProductModel {
    id: number;
    purchaseId: number;
    productId: number;
    quantity: number;
    unitPrice: number;
}