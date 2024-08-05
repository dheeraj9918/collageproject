import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  credential: any = {};
  showPassword = false;

  constructor(private route: Router, private auth: AuthService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.auth.logInPost(this.credential).subscribe(
      (res) => {
        alert('login failed');
      },
      (err) => {
        console.log(err.error.text);
        this.auth.storeToken(err.error.text);
        this.route.navigate(['/dashboard']);
      }
    );
  }

  register() {
    this.route.navigate(['/registration']);
  }

  togglePassword() {
    this.showPassword = !this.showPassword;}
}
