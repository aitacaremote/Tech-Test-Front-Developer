export interface IEvent {
  id: number;
  name: string;
  date: string;
  time: string;
  venue: string;
  location: string;
  artists: string[];
  pack: IPack[];
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
