import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url="https://localhost:44391/api/Account";
  fileUrl = "https://localhost:44391/api/Files";
  exam = "https://localhost:44391/api/SemPaper";
  resultUrl ="https://localhost:44391/api/Result";
  constructor(private http:HttpClient) { }
  getAllUsers(){
   return this.http.get<any>(this.url);
  }

  getAllStudents(){
    return this.http.get<any>(`${this.url}/allStudent`)
  }

 addResult(value:any){
    return this.http.post<any>(`${this.resultUrl}`,value)
 }

 getOneUser(id:string){
  return this.http.get<any>(`${this.url}/getOneUser/${id}`)
 }

  getResult(id:any){
    return this.http.get<any>(`${this.resultUrl}/${id}`)
  }

  updateResult(id:any,value:any){
    return this.http.put<any>(`${this.resultUrl}/${id}`,value)
  }

  updateData(id:any,std:any){
    return this.http.put<any>(`${this.url}/UpdateUserDetails/${id}`,std)
  }

  notificationList(){
    return this.http.get<any>(`${this.fileUrl}/allNotification`)
  }

  uploadNotice(file:any){
    return this.http.post<any>(`${this.url}/upload`,file)
  }
  paperList(){
    return this.http.get<any>(`${this.exam}/allNotification`)
  }

}
