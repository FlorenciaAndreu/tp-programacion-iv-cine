// Roles permitidos dentro del sistema.
export type UserRole =
    | 'customer'
    | 'employee'
    | 'admin';

// Interface de TypeScript para definir el perfil de un usuario del sistema.
export interface UserProfileModel {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    birthDate: string;
    bloodType: string;
    eyeColor: string;
    vacationDays: number;
    role: UserRole;
    points: number;
    credit: number;
    avatarUrl?: string;
}