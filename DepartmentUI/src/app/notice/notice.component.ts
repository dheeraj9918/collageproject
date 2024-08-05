import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ApiService } from '../services/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {
  notice:any;
  userDetails:any;
  selectedFile: File | null = null;
  constructor(private auth:AuthService,private ser:ApiService,private http:HttpClient) { }

  ngOnInit(): void {
    this.ser.notificationList().subscribe(
      (res)=>{this.notice=res, console.log(res)})
    if(this.auth.isLoggedIn()){
      this.userDetails = JSON.parse(localStorage.getItem('myLSkey') || '{}');
      console.log(this.userDetails)
    }
  }
  delete(n:number){
    this.http.delete<any>(`https://localhost:44391/api/Files?id=${n}`)
    .subscribe(
      res=>console.log('deleted')
    )
  }

  submitForm() {
    if (!this.selectedFile) {
      console.error('No file selected.');
      return;
    }

      // Create FormData object
      const formData = new FormData();
      formData.append('file', this.selectedFile, this.selectedFile.name);

      // Replace 'your-upload-api-url' with your actual backend API endpoint
      this.http.post<any>('https://localhost:44391/api/Files/upload', formData).subscribe(
        res => {
          console.log('File uploaded successfully:', res);
          // Handle response as needed
        },
        err => {
          console.error('Error uploading file:', err);
          // Handle error as needed
        }
      );
    }

onFileSelected(event: any) {
  this.selectedFile = event.target.files[0] as File;
}

}
