import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationPageFormComponent } from './application-page-form.component';

describe('ApplicationPageFormComponent', () => {
  let component: ApplicationPageFormComponent;
  let fixture: ComponentFixture<ApplicationPageFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicationPageFormComponent]
    });
    fixture = TestBed.createComponent(ApplicationPageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
