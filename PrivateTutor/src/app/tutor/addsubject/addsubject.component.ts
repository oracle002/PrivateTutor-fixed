import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';
@Component({
  selector: 'app-addsubject',
  templateUrl: './addsubject.component.html',
  styleUrls: ['./addsubject.component.scss']
})
export class AddsubjectComponent implements OnInit {

  public Subjectsdetails: any[] = [];
  public addSubjectsdetails: any[] = [];
  addsubjectForm!:FormGroup;
  tutorid: any;
  myDate: any;
  
  constructor(private dbservice: DbserviceService,private fb:FormBuilder,private router: Router, private datePipe:DatePipe ) { }

  ngOnInit(): void {
    this.myDate = this.datePipe.transform(new Date().toLocaleDateString(), 'yyyy-MM-dd');
    this.tutorid=localStorage.getItem("tutor_id")
    this.addsubjectForm = this.fb.group({
      subject_id :[''],
      tutor_id : this.tutorid,
      date_of_addition:this.myDate


    })

    this.dbservice.subjects().then((data: any) => {
      this.Subjectsdetails =data;
    })
    this.subjectview();
    
   
  }

  subjectview(){
    this.dbservice.viewadd({tutorid:this.tutorid}).then((data: any) => {
      this.addSubjectsdetails =data;
    })
  }

  OnSubmit(){
    this.dbservice.addsubject(this.addsubjectForm.value).then((confirmation: any) => {
      if (confirmation.message === "Success") {
        alert('add subject success')
        this.subjectview();
      }
      else {
        alert('data already exists, Please check your data')
      }
  })
}

deletesub(	subject_specificationid: string) {
  this.dbservice.deletesub({ 	subject_specificationid }).then((confirmation: any) => {
  if (confirmation.message === "Success") {
  alert('Sucessfully Deleted')
  this.subjectview();
 
  }
  })}
}
