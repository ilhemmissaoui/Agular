import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String = '';
  password: String = '';
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  authenticate() {
    this.userService.authenticate(this.username, this.password).subscribe(
      result => {
        if (result !== null)
          this.router.navigate(['home']);
        else
          console.log("Authentification failed");
      }
    )
  }
}
