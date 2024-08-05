import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  SignUpUrl = "https://localhost:44391/api/Account/signUp"
  LoginUrl = "https://localhost:44391/api/Account/login"
  getLoginUserUrl = "https://localhost:44391/api/Account";
  userId:string='';
  constructor(private http:HttpClient,private route:Router) { }

 public postData(item:any){
   return this.http.post<any>(this.SignUpUrl,item)
  }

  public logInPost(item:any){
    this.userId = item?.Id;
    return this.http.post<any>(this.LoginUrl,item)
  }

  getLoginUserDetails(){
    return this.http.get<any>(`${this.getLoginUserUrl}/getOneUser/${this.userId}`);
  }

  storeToken(tokenValue:string){
    localStorage.setItem('token',tokenValue)
  }

  getToken(){
    return localStorage.getItem('token')
  }


  isLoggedIn():boolean{
    return !! localStorage.getItem('token')
  }

  signOut(){
    localStorage.clear();
    this.route.navigate(['/login'])
  }
}
