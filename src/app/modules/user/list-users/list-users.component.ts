import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../core/services/user/user.service';
import {User} from '../../../core/models/user';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  private users:User[];
  displayedColumns= ["username","lastName","firstName","email","role"];
  constructor(private  userSerivce: UserService) {
  }

  ngOnInit() {
    this.userSerivce.getAllUsers().subscribe((result)=>{
      this.users=result;
      console.log(this.users);
    });
  }

}
