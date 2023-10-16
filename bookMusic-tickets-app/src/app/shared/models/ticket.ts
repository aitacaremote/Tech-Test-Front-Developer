export interface ITicket {
  id?: string;
  userId: string;
  eventId: string;
  createdAt?: Date;
}

export interface Ibasket {
  ticketId: string;
}
