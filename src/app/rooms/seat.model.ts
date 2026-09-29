// Tipos posibles de butaca según la consigna.
export type SeatType =
    | 'standard'
    | 'accessible'
    | 'vip';

// Interface de TypeScript para definir la estructura de una butaca.
export interface SeatModel {
    id: number;
    row: string;
    number: number;
    type: SeatType;
}