import { UserService } from './../user.service';
import { User } from './user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[];
  constructor(private _userService: UserService) {
    this.users = this._userService.users;
  }

  ngOnInit(): void {}
}
