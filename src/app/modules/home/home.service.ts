import { Injectable } from '@angular/core';

import { tap } from 'rxjs';

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

  getResponse(request: UserDataRequestModel): void {
    this.apiService.getResponse(request)
      .pipe(
        tap((response) => {
          this.message = response.content;
        })
      )
      .subscribe();
  }
}
