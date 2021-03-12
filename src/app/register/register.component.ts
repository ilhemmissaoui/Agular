import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = {
    _id: '',
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    email: ''
  };
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  register() {
    this.userService.register(this.user).subscribe(
      result => {
        if (result === true) {
          this.router.navigate(['/home']);
        }
      }
    );
  }
}
