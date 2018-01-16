import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class HttpService {
    // Set api key info based on if prod or test
    public apiKey: string = environment.apiKey;

    constructor(private http: HttpClient) { }

    ngOnDestroy() { }

    public httpGet(url: string, headers?: HttpHeaders): Promise<any> {
        let loadingId = Date.now();
        return this.http.get(url, { headers }).toPromise().then((response) => {
            return response;
        }).catch((error) => {
            this.handleError(error);
        });
    }

    public httpPost(url: string, body: any, headers?: HttpHeaders): Promise<any> {
        return this.http.post(url, body, { headers }).toPromise().then((response) => {
            return response;
        }).catch((error) => {
            this.handleError(error);
        });
    }

    public httpDelete(url: string, headers?: HttpHeaders): Promise<any> {
        let loadingId = Date.now();
        return this.http.delete(url, { headers }).toPromise().then((response) => {
            return response;
        }).catch((error) => {
            this.handleError(error);
        });
    }

    handleError(error) {
        console.error(error);
        throw error;
    }
}