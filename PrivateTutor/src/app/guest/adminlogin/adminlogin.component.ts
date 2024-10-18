import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';




@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit{
  public Loginstatus = false;
  constructor(private fb:FormBuilder,private router:Router,private dbservice:DbserviceService){}
  
  loginForm=this.fb.group({
    username :[''],
    password:['']
    })
    OnSubmit(): void {
      this.dbservice.adminlogin(this.loginForm.value).then((data:any)=> {
        if (data == ""){
      alert('Invalid Username and Password')
        }
        else {
      this.router.navigate(['/adminmaster/adminhome'])
      }
      
      })
       }
      ngOnInit(): void {
        
       } }
