import { Injectable } from '@angular/core';

import { Observable, tap } from 'rxjs';

import { UserDataRequestModel } from 'src/app/core/models/user-data-request.model';
import { ApiService } from 'src/app/core/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  message: string = '';

  constructor(
    private apiService: ApiService
  ) { }

  getResponse(request: UserDataRequestModel): Observable<any> {
    return this.apiService.getResponse(request);
  }
}
