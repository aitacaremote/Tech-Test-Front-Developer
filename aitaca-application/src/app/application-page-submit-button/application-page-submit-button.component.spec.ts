import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationPageSubmitButtonComponent } from './application-page-submit-button.component';

describe('ApplicationPageSubmitButtonComponent', () => {
  let component: ApplicationPageSubmitButtonComponent;
  let fixture: ComponentFixture<ApplicationPageSubmitButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicationPageSubmitButtonComponent]
    });
    fixture = TestBed.createComponent(ApplicationPageSubmitButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
