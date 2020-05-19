import { User } from './users/user.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[] = [
    {
      name: 'Diana',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: 'Ben',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: 'Tina',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: 'Kris',
      created_at: new Date(),
      updated_at: new Date(),
    },
  ];
  constructor() {}
}
