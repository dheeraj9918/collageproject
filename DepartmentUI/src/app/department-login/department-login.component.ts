import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-department-login',
  templateUrl: './department-login.component.html',
  styleUrls: ['./department-login.component.css']
})
export class DepartmentLoginComponent implements OnInit {

  credential:any = {};
  constructor(private route:Router,private auth:AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(){

    this.auth.logInPost(this.credential).subscribe(

      res=>{
        alert("login failed")
      },
      err=>{

        console.log(err.error.text);
        this.auth.storeToken(err.error.text);
        this.route.navigate(['/dashboard']);
      }
    )
    // console.log(this.credential)
  }

  register(){
    this.route.navigate(['/registration'])
  }

}
