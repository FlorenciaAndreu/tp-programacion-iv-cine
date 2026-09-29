// Interface de TypeScript para definir un canje de recompensa realizado por un usuario.
export interface RedemptionModel {
    id: number;
    userId: string;
    rewardId: number;
    pointsSpent: number;
    redeemedAt: string;
}