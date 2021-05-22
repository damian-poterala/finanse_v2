import { HttpClient, HttpHeaders     } from '@angular/common/http';
import { Injectable                  } from '@angular/core';
import { Observable, of              } from 'rxjs';

import { environment } from '../../environments/environment';


@Injectable({
    providedIn: 'root'
})

export class PaymentResourceService {
    constructor(
        private http: HttpClient,
    ) {  }

    getPaymentsList(): Observable<Object> {
        return this.http.get(`${ environment.paymentUrl }/data/list-payment.php`);
    }

    addPayment(obj: any): Observable<Object> {
        const headers = new HttpHeaders({
            "Content-Type": "application/json; charset=UTF-8"
        });

        return this.http.post(`${ environment.paymentUrl }/data/add-payment.php`, JSON.stringify(obj), { headers: headers });
        // return this.http.post('http://localhost/api_finanse/data/add-payment.php', obj, { headers: headers });
    }
}
