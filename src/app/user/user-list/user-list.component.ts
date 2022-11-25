import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'tcgo-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  pageTitle: string = "-- User Information --";
  users: User[] = [];
  
  
  constructor(
    private usersvc: UserService,
    private router: Router
  ) { }

  userDetail(id: number) {
    this.router.navigateByUrl(`/user/detail/${id}`)
  }

  ngOnInit(): void {
    this.usersvc.list().subscribe({
      next: (res) => {
        console.debug("Users:", res);
        this.users = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
