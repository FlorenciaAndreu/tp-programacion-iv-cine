import { SeatModel } from './seat.model';

// Interface de TypeScript para definir la estructura de una sala.
export interface RoomModel {
    id: number;
    name: string;
    seats: SeatModel[];
}


/*
RoomModel tiene:

seats: SeatModel[];

Porque una sala está compuesta por múltiples 
butacas. Cada elemento del arreglo debe respetar 
la interfaz SeatModel, lo que mantiene tipado y 
consistente el modelo.”

*/