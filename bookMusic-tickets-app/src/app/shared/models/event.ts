export interface IEvent {
  id: string;
  name: string;
  date: any;
  venue: string;
  location: string;
  pack: string;
  description: string;
}

export interface IPack {
  id: string;
  type: PackEnumType;
  price: number;
  amount: number;
}

export enum PackEnumType {
  PLATINUM = 'Platinum',
  GOLD = 'Gold',
  SILVER = 'Silver',
  DIAMOND = 'Diamond',
}
