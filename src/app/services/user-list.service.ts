import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface User{
  id: number,
  name: string,
  username:string,
  email:string
}

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor(private readonly client: HttpClient) { }

  getUsers(): Observable<User[]>{
    const url = "https://jsonplaceholder.typicode.com/Users"

    return this.client.get<User[]>(url);
  }
}
