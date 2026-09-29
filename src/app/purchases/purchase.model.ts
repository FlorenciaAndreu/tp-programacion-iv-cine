// Estados posibles de una compra.
export type PurchaseStatus =
    | 'confirmed'
    | 'cancelled';

// Interface de TypeScript para definir la estructura de una compra.
export interface PurchaseModel {
    id: number;
    userId?: string;
    qrCode: string;
    totalAmount: number;
    status: PurchaseStatus;
    entryValidated: boolean;
    candyDelivered: boolean;
    createdAt: string;
}