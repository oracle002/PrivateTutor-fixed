import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-tutorlogin',
  templateUrl: './tutorlogin.component.html',
  styleUrls: ['./tutorlogin.component.scss']
})
export class TutorloginComponent implements OnInit{
  public Loginstatus = false;
  
  tutorlist: any;
  constructor(private fb:FormBuilder,private router:Router,private dbservice:DbserviceService){}
  
  loginForm=this.fb.group({
    username :[''],
    password:['']
    })
    OnSubmit(): void {
      this.dbservice.tutorlogin(this.loginForm.value).then((data:any)=> {
        this.tutorlist = data;
        localStorage.setItem('tutor_id',this.tutorlist[0].tutor_id);
        console.log(this.tutorlist) 
        if (data == ""){
      alert('Invalid Username and Password')
        }
        else {
      this.router.navigate(['/tutormaster/tutorhome'])
      }
      
      })
       }   
       
      ngOnInit(): void {
        
       } }
