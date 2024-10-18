import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss']
})
export class MaterialComponent implements OnInit {


  getsubjectForm!:FormGroup;
  public Subjectsdetails: any[] = [];
  public Materialdetails: any[] = [];
  tutorid: any;
  constructor(private dbservice: DbserviceService,private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.tutorid=localStorage.getItem("tutor_id")
    this.getsubjectForm = this.fb.group({
      subject_id :[''],
      tutor_id : this.tutorid,
     


    })
      this.dbservice.tutorsubject(this.getsubjectForm.value).then((data: any) => {
      this.Subjectsdetails =data;
    })
    
  }
  OnSubmit(){
    this.dbservice.material(this.getsubjectForm.value).then((data:any)=>{
      this.Materialdetails =data;
    })
    
    }

    
    deletematerial(	material_id: string) {
  this.dbservice.deletematerial({ 	material_id }).then((confirmation: any) => {
  if (confirmation.message === "Success") {
  alert('Sucessfully Deleted')
  this.OnSubmit();
 
  }
  })}

  
   
  }
  

