import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  userDetails:any;
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    if(this.auth.isLoggedIn()){
      this.userDetails = JSON.parse(localStorage.getItem('myLSkey') || '{}');
    }
  }

}
