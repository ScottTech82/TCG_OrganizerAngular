import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/common/system.service';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  users: User[] = [];
  username: string = "";
  password: string = "";
  message: string = "";
  userclick: boolean = false;

  constructor(
    private sys: SystemService,
    private router: Router,
    private usersvc: UserService
  ) { }

  click(): void {
    this.userclick = !this.userclick;
    
  }

  login(): void {
    this.sys.user = null;
    this.usersvc.login(this.username, this.password).subscribe({
      next: (res) => {
        console.debug("login:", res);
        this.sys.user = res;
        this.router.navigateByUrl("/user/list");
      },
      error: (err) => {
        if(err.status === 404) {
          this.message = "The username or password entered is incorrect or does not exist!"
        }
        else {
          console.error(err);
        }
      }
    });
  }

  ngOnInit(): void {
  }

}
