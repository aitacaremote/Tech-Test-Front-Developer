export interface IEvent {
  id: string;
  name: string;
  date: any;
  venue: string;
  location: string;
  pack: IPack;
  description: string;
}

export interface IPack {
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
