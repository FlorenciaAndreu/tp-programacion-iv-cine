// Formatos de proyección permitidos según la consigna.
export type ShowFormat =
    | '2D'
    | '3D'
    | '4D'
    | '5D';

// Idiomas/modalidades permitidos según la consigna.
export type ShowLanguage =
    | 'castellano'
    | 'subtitulada';

// Interface de TypeScript para definir la estructura de una función.
export interface ShowModel {
    id: number;
    movieId: number;
    roomId: number;
    startDateTime: string;
    format: ShowFormat;
    language: ShowLanguage;
}