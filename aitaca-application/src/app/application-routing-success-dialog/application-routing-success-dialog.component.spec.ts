import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationRoutingSuccessDialogComponent } from './application-routing-success-dialog.component';

describe('ApplicationRoutingSuccessDialogComponent', () => {
  let component: ApplicationRoutingSuccessDialogComponent;
  let fixture: ComponentFixture<ApplicationRoutingSuccessDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicationRoutingSuccessDialogComponent]
    });
    fixture = TestBed.createComponent(ApplicationRoutingSuccessDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
