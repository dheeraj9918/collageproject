import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
})
export class RegistrationFormComponent implements OnInit {
  formData: any = {};
  constructor(private route: Router, private auth: AuthService) {}

  ngOnInit(): void {}
  onSubmit() {
    debugger;
    this.auth.postData(this.formData).subscribe(
      (res) => {
        console.log(this.formData)
        alert('Submitted sucesfully and user Id:' + res);
      },
      (err) => {
        console.log(err);
      }
    );

    this.formData = {};
    this.route.navigate(['/view-more']);
  }

  reset() {
    this.formData = {};
  }
}
