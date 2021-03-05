import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService,
    private alertify: AlertifyService) { }

  ngOnInit() {
  }

  onLogin(loginForm : NgForm) {
    console.log(loginForm.value);
    const token = this.authService.authUser(loginForm.value);
    if(token) {
      localStorage.setItem('token', token.userName);
      this.alertify.success('Login successfull');
      this.router.navigate(['/']);
    } else {
      this.alertify.error('User id or password is wrong');
    }
  }

}
