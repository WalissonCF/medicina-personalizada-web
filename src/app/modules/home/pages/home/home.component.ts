import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { UserDataRequestModel } from 'src/app/core/models/user-data-request.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  userForm!: FormGroup;

  constructor() {
    this.initUserForm();
   }

  private initUserForm(): void {
    this.userForm = new FormGroup({
      sexo: new FormGroup('', Validators.required),
      idade: new FormGroup('', Validators.required),
      altura: new FormGroup('', Validators.required),
      sintomas: new FormGroup('', Validators.required),
      alergias: new FormGroup(''),
      historico: new FormGroup(''),
    });
  }

  onSubmit(): void {
    
  }

  private createRequest(): UserDataRequestModel {
    let request: UserDataRequestModel = {
      sexo: this.userForm.controls['sexo'].value,
      idade: this.userForm.controls['idade'].value,
      altura: this.userForm.controls['altura'].value,
      sintomas: this.userForm.controls['sintomas'].value,
      alergias: this.userForm.controls['alergias'].value,
      historico: this.userForm.controls['historico'].value,
    }
    return request
  }

  public teste(): void {

  }
}
