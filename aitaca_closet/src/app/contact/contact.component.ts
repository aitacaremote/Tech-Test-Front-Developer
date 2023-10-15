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
    alert('enviandose el mensaje');
    if (this.contactForm.valid) {
      alert('Mensaje enviado')
      console.log('Formulario enviado:', this.contactForm.value);
      this.contactForm.reset();
    } else {
      alert('Debe rellenar todos los campos antes de enviar')
      console.log(
        'El formulario no es válido. Por favor, complete todos los campos correctamente.'
      );
    }
  }
}
