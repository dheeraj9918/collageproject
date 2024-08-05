import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  notice:any;
  selectedFile: File | null = null;
  constructor(private router: Router,private ser:ApiService,
    private http:HttpClient) { }
  userDetails:any;
  ngOnInit(): void {
    this.ser.notificationList().subscribe(
      (res)=>{this.notice=res, console.log(res)}
    )

  }


  viewMore(){
    this.router.navigate(['/view-more']);
  }

  chat(){
    this.router.navigate(['/bot'])
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

    delete(n:number){
      this.http.delete<any>(`https://localhost:44391/api/Files?id=${n}`)
      .subscribe(
        res=>console.log('deleted')
      )
    }
  }
