import { HttpClient     } from '@angular/common/http';
import { Injectable     } from '@angular/core';
import { Observable, of } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class SettingResourceService {
    constructor(
        private http: HttpClient
    ) {  }

    getMonthsList(): Observable<Object> {
        return this.http.get(`${ environment.settingUrl }/data/list-months.php`);
    }
}