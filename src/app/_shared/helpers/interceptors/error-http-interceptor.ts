import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable()
export class ErrorHttpInterceptor implements HttpInterceptor {
  constructor(public router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error) => {
        if (error instanceof HttpErrorResponse) {
          switch (error.status) {
            case 401:
              this.router.navigateByUrl('/login');
              break;
            case 403:
              this.router.navigateByUrl('/unauthorized');
              break;
          }
        }
        Swal.fire(
          '😢',
          `Oups, quelque chose s'est mal passé, veuillez réessayer plus tard`,
          'error'
        );
        console.log('error is intercepted', { error });
        return throwError(error.message);
      })
    );
  }
}
