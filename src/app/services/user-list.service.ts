import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface User{
  userId: number,
  id: number,
  name: string,
  username:string,
  email:string
}

@Injectable({
  providedIn: 'root'
})
export class UserListService {
  private url = "https://jsonplaceholder.typicode.com/Users";

  constructor(private readonly client: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.client.get<User[]>(this.url);
  }

  editUser(id:number,editUser: User): Observable<{}>{
    return this.client.put<{}>(`${this.url}/${id}`, editUser);
  }

  addUser(newUser: User): Observable<{}>{
    return this.client.post(this.url,newUser);
  }

  removeUser(id: number): Observable<{}>{
    return this.client.delete(`${this.url}/${id}`);
  }


}
