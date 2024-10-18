
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-qualificationreg',
  templateUrl: './qualificationreg.component.html',
  styleUrls: ['./qualificationreg.component.scss']
})
export class QualificationregComponent implements OnInit {
  validationstatus: boolean;
  constructor(private fb:FormBuilder,private router:Router,private dbservice:DbserviceService){}
  
  qualificationForm=this.fb.group({
    qualification:['',Validators.required],
    qdescription:['',Validators.required]
    })
    ngOnInit(): void {
      
    }
    OnSubmit() {

      if (!this.qualificationForm.valid) {
        this.validationstatus = true;
        return
        }
        else {

      this.dbservice.qualificationreg(this.qualificationForm.value).then((confirmation: any) => {
      
      if (confirmation.message === "Success") {
      
      alert('qualification Details Created')
      
      this.router.navigate(['/adminmaster/qualification'])
      
      }
      
      else{
      
      alert('data already exists, Please check your data')
      
      }
      
      })
      
      } 
      
      
    }
  }

  