import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'tcgo-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  pageTitle: string = "-- User Details --";
  user!: User;
  detailPage: boolean = true;
  isNotAdmin: boolean = true;

  constructor(
    private usersvc: UserService,
    private route: ActivatedRoute, 
    private router: Router

  ) { }

  deleteUser(): void {
    this.usersvc.remove(this.user.id).subscribe({
      next: (res) => {
        console.debug("User Deleted!");
        this.router.navigateByUrl("/user/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    this.usersvc.get(id).subscribe({
      next: (res)  => {
        console.debug("User: ", res);
        this.user = res;
      },
      error: (err) => {
        console.error(err);
      }
    });

    if(this.user.isAdmin === true) {
      this.isNotAdmin = !this.isNotAdmin;
    }
  }

}
