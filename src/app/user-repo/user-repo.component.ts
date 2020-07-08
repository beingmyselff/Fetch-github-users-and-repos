import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-repo',
  templateUrl: './user-repo.component.html',
  styleUrls: ['./user-repo.component.scss']
})
export class UserRepoComponent implements OnInit {

  users ;
  username ;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // get the username out of the route params
      const key = 'username';
      this.username = params[key];
      // now we can grab selected users repo from github
      this.users = this.userService.getUserRepo(this.username);
    });
  }

}
