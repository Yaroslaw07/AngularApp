import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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

  removeUser(id: number) {
    this.service.removeUser(id).subscribe(() => {
      
      this.users= this.users.filter(t => t.id != id);
      
    },() => {
      console.log('remove failed');
    })
    
  }

  addUser(newUser: User){
    this.service.addUser(newUser)  
      .subscribe(() => 
          {
            this.users = [newUser,... this.users]
          });
  }

  editUser(id: number, editUser: User){
    let changedUser
    if(this.findUser(id)){
      editUser.id = id;
      changedUser = editUser;
    }
    else
      changedUser = undefined;
    
    this.service.editUser(id, editUser).subscribe();

  }

  findUser(id: number): User | undefined {
    return this.users.find(t => t.id == id);
  }

}
