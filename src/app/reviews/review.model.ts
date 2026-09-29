// Valores permitidos para la calificación de una película.
export type ReviewRating =
    | 1
    | 2
    | 3
    | 4
    | 5;

// Interface de TypeScript para definir la estructura de una reseña.
export interface ReviewModel {
    id: number;
    movieId: number;
    userId: string;
    rating: ReviewRating;
    comment?: string;
}