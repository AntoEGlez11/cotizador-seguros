import { Injectable } from '@angular/core';
import { LoginRequest } from '../../interfaces/loginRequest';

import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(credentials:LoginRequest):Observable<User> {
    console.log(credentials);
     return this.http.get<User>('././assets/data.json').pipe(
      catchError(this.hancleError)
     )
  }

  private hancleError(error:HttpErrorResponse){
    if (error.status===0) {
      console.error('se ha producido un error', error.error);
      
    }else{
      console.error('backend retorno codigo de estado', error.status, error.error);
      
    }
    return throwError(()=> new Error('Algo fallo. Por favor intente nuevamente'));
  }
}
