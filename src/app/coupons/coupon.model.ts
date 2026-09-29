// Tipos de cupón contemplados por la consigna.
export type CouponType =
    | 'first-purchase'
    | 'age';

// Interface de TypeScript para definir la estructura de un cupón.
export interface CouponModel {
    id: number;
    discountPercentage: number;
    type: CouponType;
    minimumAge?: number;
}