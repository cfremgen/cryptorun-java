import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IPrices } from './prices.interface';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PricesService {
    private pricesUrl = '/api/prices';

    constructor(
        private http: HttpClient) {
    }

    getAllPrices() {
        return this.http.get<Array<IPrices>>(this.pricesUrl);
    }

}
