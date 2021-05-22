import { HttpClient, HttpHeaders     } from '@angular/common/http';
import { Injectable                  } from '@angular/core';
import { Observable, of              } from 'rxjs';

import { environment } from '../../environments/environment';


@Injectable({
    providedIn: 'root'
})

export class ProfitResourceService {
    constructor(
        private http: HttpClient,
    ) {  }

    getProfitList(): Observable<Object> {
        return this.http.get(`${ environment.profitUrl }/data/list-profit.php`);
    }
}