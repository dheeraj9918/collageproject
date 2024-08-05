import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parrent',
  templateUrl: './parrent.component.html',
  styleUrls: ['./parrent.component.css']
})
export class ParrentComponent implements OnInit {
  val1:boolean =true;
  val2:boolean = false;
  val3:boolean = false;
  student:boolean = true;
  alumnis:boolean = false;
  constructor( private route:Router) { }

  ngOnInit(): void {
  }

  registration(){
    this.route.navigate(['/registration'])
  }

  login(){
    this.route.navigate(['/login'])
  }
  Class(){
    this.val1=true;
    this.val2=false;
    this.val3 =false;
  }
  lab(){
    this.val1=false;
    this.val2=true;
    this.val3 =false;
  }
  Excilence(){
    this.val1=false;
    this.val2=false;
    this.val3 =true;
  }

  students(){
    this.student=true;
    this.alumnis=false;
  }

  alumni(){
    this.student=false;
    this.alumnis=true;
  }

  Department(){
    this.route.navigate(['/departLogin'])
  }

  result(){
    this.route.navigate(['/result'])
  }
}
