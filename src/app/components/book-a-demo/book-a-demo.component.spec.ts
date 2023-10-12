import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookADemoComponent } from './book-a-demo.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DemoService } from './../../services/demo.service';
describe('BookADemoComponent', () => {
  let component: BookADemoComponent;
  let fixture: ComponentFixture<BookADemoComponent>;
  let demoService: DemoService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookADemoComponent],
      providers: [DemoService, FormBuilder, Router],
      imports: [ReactiveFormsModule],

    })
      .compileComponents();

    fixture = TestBed.createComponent(BookADemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    demoService = TestBed.inject(DemoService);
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should mark all form controls as touched', () => {
    component.markAllAsTouched();
    const formControls = component.form.controls;

    for (const controlName of Object.keys(formControls)) {
      expect(formControls[controlName].touched).toBeTrue();
    }
  });

  it('should navigate to display-demo-details component after successful submission', () => {
    const testFormData = {
      name: 'Dina Ashmawy',
      email: 'dina@test.com',
      phone: '1234567890',
      activityArea: '1',
      message: 'Test message',
    };
    const navigateSpy = spyOn(router, 'navigate');


    component.form.setValue(testFormData);
    component.onSubmit();
    expect(navigateSpy).toHaveBeenCalledWith(['/app-display-demo-details']);
  });

});
