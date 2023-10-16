import { TestBed } from '@angular/core/testing';
import { EventCardComponent } from './event-card.component';
import { PackEnumType } from 'src/app/shared/models';

describe('EventCardComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventCardComponent],
    }).compileComponents();
  });
  it('render EventCard without errors', () => {
    const fixture = TestBed.createComponent(EventCardComponent);
    const component = fixture.componentInstance;
    component.event = {
      id: 'hibklj',
      name: 'Event 1',
      description: 'Description 1',
      date: new Date(),
      venue: 'Venue 1',
      location: 'Location 1',
      pack: {
        type: PackEnumType.PLATINUM,
        price: 100,
        amount: 10,
      }
    };
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('mat-card-title').innerText).toEqual('Event 1');    
  });
});
