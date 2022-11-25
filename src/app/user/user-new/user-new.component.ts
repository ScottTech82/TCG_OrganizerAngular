import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'tcgo-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {

  pageTitle: string = "-- New User Info --";
  user: User = new User;

  constructor(
    private usersvc: UserService,
    private router: Router
  ) { }

  addNew(): void {
    this.usersvc.create(this.user).subscribe({
      next: (res) => {
        console.debug("User created");
        this.router.navigateByUrl("/user/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
  }

}
