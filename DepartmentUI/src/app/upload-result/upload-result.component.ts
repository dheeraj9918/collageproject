import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-upload-result',
  templateUrl: './upload-result.component.html',
  styleUrls: ['./upload-result.component.css']
})
export class UploadResultComponent implements OnInit {
  formData: any = {
    subject1: '',
    optMarks1: 0,
    subject2: '',
    optMarks2: 0,
    subject3: '',
    optMarks3: 0,
    subject4: '',
    optMarks4: 0,
    subject5: '',
    optMarks5: 0,
    optTotalMarks: 0,
    signInModelId: ''
  };
  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }

  onSubmit1() {
    this.formData.optTotalMarks = this.formData.optMarks1
    + this.formData.optMarks2 + this.formData.optMarks3
    + this.formData.optMarks4 + this.formData.optMarks5;
    this.api.addResult(this.formData).subscribe(
      res=>console.log(res),
      err=>console.log(err)
    )
    console.log(this.formData);
  }

  reset() {
    this.formData = {};
  }
}
