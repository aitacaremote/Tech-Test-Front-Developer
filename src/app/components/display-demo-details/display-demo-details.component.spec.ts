import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDemoDetailsComponent } from './display-demo-details.component';
import { MatCardModule } from '@angular/material/card';

describe('DisplayDemoDetailsComponent', () => {
  let component: DisplayDemoDetailsComponent;
  let fixture: ComponentFixture<DisplayDemoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplayDemoDetailsComponent],
      imports: [MatCardModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DisplayDemoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
