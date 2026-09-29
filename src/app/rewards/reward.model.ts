// Tipos de recompensa permitidos por la consigna.
export type RewardType =
    | 'ticket'
    | 'product';

// Interface de TypeScript para definir la estructura de una recompensa.
export interface RewardModel {
    id: number;
    name: string;
    type: RewardType;
    pointsCost: number;
    productId?: number;
}