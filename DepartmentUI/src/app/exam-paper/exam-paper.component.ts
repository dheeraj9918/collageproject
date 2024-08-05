import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ApiService } from '../services/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-exam-paper',
  templateUrl: './exam-paper.component.html',
  styleUrls: ['./exam-paper.component.css']
})
export class ExamPaperComponent implements OnInit {

  notice:any;
  userDetails:any;
  selectedFile: File | null = null;
  constructor(private auth:AuthService,private ser:ApiService,private http:HttpClient) { }

  ngOnInit(): void {
    this.ser.paperList().subscribe(
      (res)=>{this.notice=res, console.log(res)})
    if(this.auth.isLoggedIn()){
      this.userDetails = JSON.parse(localStorage.getItem('myLSkey') || '{}');
      console.log(this.userDetails)
    }
  }
  delete(n:number){
    this.http.delete<any>(`https://localhost:44391/api/SemPaper?id=${n}`)
    .subscribe(
      res=>console.log('deleted')
    )
  }

  submitForm() {
    if (!this.selectedFile) {
      console.error('No file selected.');
      return;
    }

      const formData = new FormData();
      formData.append('file', this.selectedFile, this.selectedFile.name);
      this.http.post<any>('https://localhost:44391/api/SemPaper/upload', formData).subscribe(
        res => {
          console.log('File uploaded successfully:', res);
        },
        err => {
          console.error('Error uploading file:', err);
        }
      );
    }

onFileSelected(event: any) {
  this.selectedFile = event.target.files[0] as File;
}
}
