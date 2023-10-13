import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-page',
  template: `
    <div>
      <p style="font-weight: 900">ERROR 404</p>
      <p style="margin-bottom: 2.5rem;">Page not found</p>
      <button mat-raised-button color="primary" (click)="goHome()">
        <mat-icon aria-hidden="false" fontIcon="arrow_back"></mat-icon>Go home
      </button>
    </div>
  `,
  styles: [`
    div{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      font-size: 200%
    }
  `]
})
export class ErrorPageComponent {

  constructor(
    private router: Router
  ){}

  goHome(){
    this.router.navigate(['/'])
  }

}
