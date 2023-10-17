import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {

  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nombre: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.minLength(9)]],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', Validators.required],
    });
  }

  submitForm() {
    if (this.contactForm.valid) {
      alert('Message submited')
      console.log('Form sended:', this.contactForm.value);
      this.contactForm.reset();
    } else {
      alert('You must fill out all fields correctly before sending');
      console.log('The form is not valid.');
    }
  }
}
