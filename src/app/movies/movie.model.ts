import { GenreModel } from './genre.model';

//Valores permitidos para la clasificación por edad.
export type AgeRating = 0 | 13 | 18;

//Interface de TypeScript para definir la estructura de una película.
export interface MovieModel {
    id: number;
    name: string;
    imageUrl: string;
    synopsis: string;
    durationMinutes: number;    //usado para calcular el fin de la funcion e intervalo
    ageRating: AgeRating;   //limita los valores posibles de edad
    releaseDate: string;    //Proximamente/preventa
    genres: GenreModel[];   //una pelicula puede tener muchos generos
}