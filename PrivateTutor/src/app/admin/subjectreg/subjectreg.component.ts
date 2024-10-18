
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-subjectreg',
  templateUrl: './subjectreg.component.html',
  styleUrls: ['./subjectreg.component.scss']
})
export class SubjectregComponent implements OnInit {
  public validationstatus = false;
  constructor(private fb:FormBuilder,private router:Router,private dbservice:DbserviceService){}
  
  subjectForm=this.fb.group({
    subject:['',Validators.required],
    description:['',Validators.required]
    })
    ngOnInit(): void {
      
    }
    OnSubmit() {
      if (!this.subjectForm.valid) {
        this.validationstatus = true;
        return
        }
        else {
        

      this.dbservice.subjectreg(this.subjectForm.value).then((confirmation: any) => {
      
      if (confirmation.message === "Success") {
      
      alert('subject Details Created')
      
      this.router.navigate(['/adminmaster/subject'])
      
      }
      
      else{
      
      alert('data already exists, Please check your data')
      
      }
      
      })
      
      } 
     
      
    }
  }