import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DemoService } from '../../services/demo.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-book-a-demo',
  templateUrl: './book-a-demo.component.html',
  styleUrls: ['./book-a-demo.component.css']
})
export class BookADemoComponent {
  form: FormGroup;
  dropdownOptions: string[] = ['Retail', 'Joyeria', 'Otros'];

  constructor(private fb: FormBuilder, private demoService: DemoService, private router: Router) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      activityArea: ['0'],
      message: ['']
    });
  }

  markAllAsTouched() {
    Object.values(this.form.controls).forEach(control => {
      control.markAsTouched();
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const formValue$: Observable<any> = new Observable((observer) => {
        observer.next(this.form.value);
        observer.complete();
      });

      formValue$
        .pipe(
          map((data) => {
            // Use map to transform the form data
            return {
              ...data,
              name: data.name.toUpperCase(), // Convert the name to uppercase
              email: data.email.toLowerCase(), // Convert the email to lowercase
            };
          })
        )
        .subscribe((finalData) => {
          // Now, finalData contains your processed data
          this.submitDataToServer(finalData);
        });

    } else {
      this.markAllAsTouched();
    }
  }

  submitDataToServer(data: any): void {
    // Here we should call the request api and after it came successfully with (status = 200) 
    // It will navigate directly to display-demo-details component with the requested data 
    // else it should navigate to error component
    this.demoService.submittedData = data;
    this.router.navigate(['/app-display-demo-details']);

  }

}
