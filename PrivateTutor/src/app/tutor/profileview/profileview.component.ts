import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-profileview',
  templateUrl: './profileview.component.html',
  styleUrls: ['./profileview.component.scss']
})
export class ProfileviewComponent implements OnInit {

  selectedFiles?: FileList;
  currentFile?: any;
  message ='';
  fileInfos?: Observable<any>

  profileForm!:FormGroup;
  public Tutordetails: any[] = [];

  tutorid: any;
  constructor(private dbservice: DbserviceService,private fb:FormBuilder,private router:Router) { 

  }

  ngOnInit(): void {
    this.tutorid=localStorage.getItem("tutor_id"),
    this.profileForm = this.fb.group({
      tutor_name: [''],
      tutor_phoneno: [''],
      tutor_email: [''],
      qualification_title: [''],
      district_name: [''],
      tutor_gender:[''],
      profile_pic:[''],
      tutor_id: this.tutorid,

    })
    const id=this.tutorid
    this.dbservice.profileview({id}).subscribe((data: 
    any) => {
    this.Tutordetails = data;
    console.log(this.Tutordetails);
    this.profileForm.setValue({
      tutor_name: data[0].tutor_name,
      tutor_phoneno: data[0].tutor_phoneno,
      tutor_email: data[0].tutor_email,
      qualification_title: data[0].qualification_title,
      district_name: data[0].district_name,
      tutor_gender: data[0].tutor_gender,
      tutor_id:data[0].tutor_id,
      profile_pic:data[0].profile_pic


    });
  }); 
    
  }

  selectFile(event: any): void {
    this.selectedFiles= event.target.files;
  }


  OnSubmit() {

    if (this.selectedFiles) {
      // console.log(this.selectedFiles);
      const file: File | null = this.selectedFiles.item(0);
      
      if (file) {
      this.currentFile = file;
      
      this.dbservice.upload(this.currentFile).subscribe(
      (event: any) => {
      this.message = event.body.message; }) ;
      } }
      this.profileForm.value.profile_pic=this.currentFile.name;
   
      this.dbservice.profileupdate(this.profileForm.value).then((confirmation: any) => {
        if (confirmation.message === "Success") {
          alert('profile updated')
          this.router.navigate(['/tutormaster/tutorhome'])
        }
        else {
          alert('data already exists, Please check your data')
        }
      })
    }
}
