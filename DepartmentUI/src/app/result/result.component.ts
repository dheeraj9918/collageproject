import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  credential: { Id: string } = { Id: '' };
  search:boolean = true;
  result:boolean =false;
  marksheet:any;
  userDetails:any;


  constructor(private api:ApiService,private auth:AuthService) { }

  ngOnInit(): void {
    if(this.auth.isLoggedIn()){
      this.userDetails = JSON.parse(localStorage.getItem('myLSkey') || '{}');
    }
  }
  onSubmit() {

    this.api.getResult(this.credential.Id).subscribe(
      (res)=>{
        this.marksheet=res
        this.result = true;
        this.search = false;
        console.log(res)
      },
      (err)=>alert("Invalid Roll No")
    )
  }


}
