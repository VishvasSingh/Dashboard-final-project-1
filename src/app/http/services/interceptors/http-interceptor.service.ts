import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, catchError, finalize, throwError } from "rxjs";
import { SpinnerService } from "src/app/utils/services/spinner-service/spinner.service";

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
    constructor(private spinnerService: SpinnerService, private router: Router){}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        const projectIdMatch = this.router.url.match(/\/project\/([^\/]+)/);
        
        if (request.headers.has('x-hide-spinner')){
            request = request.clone(
                {
                    headers: request.headers.delete('x-hide-spinner')
                }
            )
        }
        else{
            this.spinnerService.showSpinner()
        }

        if(projectIdMatch)
        {
            request = request.clone({
            setHeaders: {
                'x-project-id': projectIdMatch[1]
            }
        })
        }
        return next.handle(request).pipe(
            catchError((error:HttpErrorResponse)=> {
                return throwError(error);
            }),
            finalize(()=> {
                this.spinnerService.hideSpinner()
            })
        )
        
    }
}