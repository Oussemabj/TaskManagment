import {Component, OnInit} from '@angular/core';
import {User} from '../../../core/models/user';
import {UserService} from '../../../core/services/user/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.scss']
})
export class AddUsersComponent implements OnInit {
  private user: User = new User('troliste', 'password', 'Mohamed', 'Mseddi', 'mameya.mseddi@gmail.com', 'ADMIN');

  constructor(private userService: UserService,private router:Router) {
  }

  ngOnInit() {
  }

  submit() {
    this.userService.addUser(this.user);
    this.router.navigate(['/list']);
  }
}
