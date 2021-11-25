import { Component,EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'src/app/services/user-list.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  
  formData = {
    nameUser: '',
    username: '',
    email:''
  };

  @Output() add = new EventEmitter<User>();

  addUser(){
    const user: User = {
      userId: 0,
      id: Math.random() * 1000,
      name: this.formData.nameUser,
      username: this.formData.username,
      email: this.formData.email
    };

    this.add.emit(user);
  }

}
