// Interface de TypeScript para definir un registro de auditoría del sistema.
export interface AuditLogModel {
    id: number;
    userId: string;
    action: string;
    createdAt: string;
}