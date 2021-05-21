import { HttpClient     } from '@angular/common/http';
import { Injectable     } from '@angular/core';
import { Observable, of } from 'rxjs';

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
}
