// Interface de TypeScript para definir una alerta activada por un usuario sobre una película.
export interface MovieAlertModel {
    id: number;
    userId: string;
    movieId: number;
    active: boolean;
}