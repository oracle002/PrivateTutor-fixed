import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-viewmaterial',
  templateUrl: './viewmaterial.component.html',
  styleUrls: ['./viewmaterial.component.scss']
})
export class ViewmaterialComponent implements OnInit {

  tutor_id: any;
  getsubjectForm!:FormGroup;
  public Subjectsdetails: any[] = [];
  public Materialdetails: any[] = [];
 
  constructor(private dbservice: DbserviceService,private fb:FormBuilder,private route: ActivatedRoute,private router:Router) { 
  this.route.paramMap.subscribe((params: ParamMap) => {
    this.tutor_id = params.get('id')
    })}
  ngOnInit(): void {
    this.getsubjectForm = this.fb.group({
      subject_id :[''],
      tutor_id : this.tutor_id,
     


    })
      this.dbservice.tutorsubject(this.getsubjectForm.value).then((data: any) => {
      this.Subjectsdetails =data;
    })
    
  }
  OnSubmit(){
    this.dbservice.materials(this.getsubjectForm.value).then((data:any)=>{
      this.Materialdetails =data;
    })
    
    }
}
