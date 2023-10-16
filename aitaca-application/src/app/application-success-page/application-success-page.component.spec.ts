import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationSuccessPageComponent } from './application-success-page.component';

describe('ApplicationSuccessPageComponent', () => {
  let component: ApplicationSuccessPageComponent;
  let fixture: ComponentFixture<ApplicationSuccessPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicationSuccessPageComponent]
    });
    fixture = TestBed.createComponent(ApplicationSuccessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
