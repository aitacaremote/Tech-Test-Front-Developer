import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { BehaviorSubject, Subject, throwError } from 'rxjs';
import {
  catchError,
  filter,
  switchMap,
  take,
  takeUntil,
} from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  private refreshTokenSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('');
  private takeUntilSubject: Subject<boolean> = new Subject<boolean>();
  private accessToken: string;
  private refreshToken: string;

  constructor(
    private authService: AuthService,
  ) {
    this.accessToken = this.authService.getCredentialData().accessToken;
    this.refreshToken = this.authService.getCredentialData().refreshToken;
    this.refreshTokenSubject.next(this.accessToken);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let authReq = req;
    if (!!this.accessToken) {
      authReq = this.addTokenHeader(req, this.accessToken);
    }
    return next.handle(authReq).pipe(
      catchError((error) => {
        if (error instanceof HttpErrorResponse && error.status === 401) {
          return this.handle401Error(authReq, next);
        }
        if (authReq.url.includes('refresh_token')) {
          this.takeUntilSubject.next(true);
        }
        return throwError(() => error);
      })
    );
  }

  /**
   * mise à jour du accessToken à l'aide du refreshToken lors de la réception d'une HttpResponse avec le code d'erreur 401
   * @param request
   * @param next
   * @return Observable<string>
   * @private
   */
  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    return this.refreshTokenSubject.pipe(
      filter((accessToken: string) => !!accessToken),
      take(1),
      takeUntil(this.takeUntilSubject),
      switchMap((accessToken: string) =>
        next.handle(this.addTokenHeader(request, accessToken))
      )
    );
  }

  /**
   * Ajout du token dans le header de la request
   * @param request
   * @param token
   * @return HttpRequest<any>
   * @private
   */
  private addTokenHeader(
    request: HttpRequest<any>,
    token: string
  ): HttpRequest<any> {
    return request.clone({
      headers: request.headers.set('Authorization', `: Bearer ${token}`),
    });
  }
}
