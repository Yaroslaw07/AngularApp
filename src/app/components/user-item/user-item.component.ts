import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/services/user-list.service';


@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent {

  @Input() user!: User;

  @Output() remove = new EventEmitter();
  @Output() edit  = new EventEmitter<User>();

  editMode = false;

  startEditMode() {
    this.editMode = true;
  }

  editItem(){
    if(!this.user.name 
      || !this.user.username 
      || !this.user.email) 
      {return;}

    let editUser:User = { 'userId': this.user.userId,
                      'id':this.user.id,
                      'name':this.user.name,
                      'username':this.user.username,
                      'email':this.user.email}

    this.edit.emit(editUser);
    this.editMode = false;
  }

  removeUser(){
    this.remove.emit();
  }



}
