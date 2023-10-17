import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactComponent],
      imports:[ReactiveFormsModule]
    });
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component.contactForm).toBeTruthy();
    expect(component.contactForm.controls['nombre']).toBeTruthy();
    expect(component.contactForm.controls['email']).toBeTruthy();
    expect(component.contactForm.controls['telefono']).toBeTruthy();
    expect(component.contactForm.controls['mensaje']).toBeTruthy();
  });

  it('should not allow form submission when fields are empty', () => {
    expect(component.contactForm.valid).toBeFalsy();
  });

  it('should allow form submission when all fields are valid', () => {
    const form = component.contactForm;
    form.controls['nombre'].setValue('John Doe');
    form.controls['email'].setValue('john@example.com');
    form.controls['telefono'].setValue('1234567890');
    form.controls['mensaje'].setValue('This is a test message');
    expect(form.valid).toBeTruthy();
  });
});

