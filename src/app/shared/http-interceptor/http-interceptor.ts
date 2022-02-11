import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpParams
} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import * as md5 from 'md5';

@Injectable()
export class HttpLocalInterceptor implements HttpInterceptor {

    constructor() { }

    buildApiParams(timestamp: number) {
        return md5(timestamp + '780d85863c2a84cecacf329c32353e3f5c2a7615' + environment.apiKey);
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let ts = new Date().getTime();

        let params = new HttpParams();
        params = params.set('ts', ts);
        params = params.set('apikey', environment.apiKey);
        params = params.set('hash', this.buildApiParams(ts));

        request = request.clone({
            params
        });

        return next.handle(request);
    }
}
