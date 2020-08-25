export interface TicketState {
    tickets: Tickets[];
}

export interface Tickets {
    id: number;
    name: string;
    description: string;
    created_by: string;
    assigned_to: string;
    created_at: string;
}