import { Component, OnInit } from '@angular/core';
import { User, UserListService } from 'src/app/services/user-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})

export class UserListComponent implements OnInit {
  users: User[];
  

  constructor(private readonly service: UserListService) {
    this.users = [];
   }

  ngOnInit() {
      var users$ = this.service.getUsers();

      users$.subscribe(result => this.users= result)
  }

}
