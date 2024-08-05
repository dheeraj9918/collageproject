import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  val1:boolean =true;
  val2:boolean = false;
  val3:boolean = false;
  constructor(private route:Router) { }

  ngOnInit(): void {
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
}
