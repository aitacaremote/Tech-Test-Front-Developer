import { Component, inject } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { RouterOutlet } from '@angular/router';
import { AsyncPipe, NgClass, NgIf, NgStyle } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
const BACKGROUND_IMAGE_REFRESH = 15000; //15s

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [MatCardModule, RouterOutlet],
  templateUrl: './authentication.component.html',
})
export class AuthenticationComponent {
}
