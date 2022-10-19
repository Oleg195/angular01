import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: []
})
export class UsersComponent implements OnInit {
  users = [
    {
      first_name: "alex",
      age: 32
    },
    {
      first_name: "bob",
      age: 23
    }
  ]

  user: User | undefined

  flag: boolean = true

  showUser() {
    console.log(this.user);
  }

  toggle() {
    this.flag = !this.flag;
  }

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.http.get('https://reqres.in/api/users/1 | https://reqres.in/api/users/2').subscribe({
      next: (data: any) => this.user = new User(data.data.first_name, data.data.last_name)
    });
  }
}
