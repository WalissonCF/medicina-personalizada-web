import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, catchError, of } from 'rxjs';

import { UserDataResponseModel } from '../models/user-data-response.model';
import { UserDataRequestModel } from '../models/user-data-request.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private api: HttpClient
  ) { }

  private getApiURL(): string {
    return environment.apiUrl;
  }

  getResponse(request: UserDataRequestModel): Observable<UserDataResponseModel> {
    return this.api.post<UserDataResponseModel>(`${this.getApiURL()}/gpt`, request)
      .pipe(
        catchError((err) => {
          console.log(err);
          return of({} as UserDataResponseModel);
        })
      );
  }
}
