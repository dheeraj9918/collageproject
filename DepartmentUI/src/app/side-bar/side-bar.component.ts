import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  oview:boolean =false;
  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  announc(){
    this.route.navigate(['/anouncement'])
  }
  about(){
    this.route.navigate(['/about'])
  }
  HoD(){
    this.route.navigate(['/hod'])
  }

  Courses(){
    this.route.navigate(['/course'])
  }
  Faculty(){
    this.route.navigate(['/faculty'])
  }

  Infrastructure(){
    this.route.navigate(['/infra'])
  }

  achievement(){
    this.route.navigate(['/achievement'])
  }

  acedmic(){
    this.route.navigate(['acedmic'])
  }

  testimonials(){
    this.route.navigate(['testimonials'])
  }

  important(){
    this.route.navigate(['important'])
  }

  gallary(){
    this.route.navigate(['/gallary'])
  }
  paper(){
    this.route.navigate(['/exam-paper'])
  }
}
