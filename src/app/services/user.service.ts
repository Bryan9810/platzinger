import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  friends: User[];
  constructor() {
    let user1: User = {
      nick: 'Bryan',
      subnick: '',
      age: 20,
      email: 'esta@correo.co',
      friend: true,
      uid: 1,
      status: 'online'
    };

    let user2: User = {
      nick: 'Camila',
      subnick: 'Esta',
      age: 24,
      email: 'per@correo.org',
      friend: true,
      uid: 2,
      status: 'offline'
    };

    let user3: User = {
      nick: 'Jose Pinta',
      subnick: 'solo casas',
      age: 50,
      email: 'josepintoparedes@mail.co.esta',
      friend: false,
      uid: 3 ,
      status: 'busy'
    };

    let user4: User = {
      nick: 'Amada Silla',
      subnick: 'Cansada',
      age: 20,
      email: 'noagonada@horrible.corp',
      friend: true,
      uid: 4,
      status: 'away'
    };

    let user5: User = {
      nick: 'Milena',
      subnick: 'Sad',
      age: 80,
      email: 'estoyvieja@nopuedo.rd',
      friend: false,
      uid: 5,
      status: 'online'
    };

    let user6: User = {
      nick: 'Juanita',
      subnick: 'En paro',
      age: 17,
      email: 'edna@no_entiendo_la_armonica.com',
      friend: true,
      uid: 6,
      status: 'online'
    };

    this.friends = [user1, user2, user3, user4, user5, user6]
  }

  getFriends(){
    return this.friends;
  }
}
