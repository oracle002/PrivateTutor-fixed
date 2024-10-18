import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { ActivatedRoute, ParamMap, Router,} from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-subjectedit',
  templateUrl: './subjectedit.component.html',
  styleUrls: ['./subjectedit.component.scss']
})
export class SubjecteditComponent implements OnInit {  
  subject_id: any;
  public subjectdataarray: any;
  editsubjectForm!:FormGroup;
  validationstatus: false;
  constructor(private fb: FormBuilder,private router:Router, private route: ActivatedRoute,
    private dbservice: DbserviceService) {
    this.route.paramMap.subscribe((params: ParamMap) => {
    this.subject_id = params.get('id')
    })}
    ngOnInit(): void {
      this.editsubjectForm = this.fb.group({
        subject_id: [''],
        subject_title: [''],
        subject_description: ['']
      })
      const id=this.subject_id
      this.dbservice.getsujectbaseid({id}).subscribe((data: 
      any) => {
      this.subjectdataarray = data;
      console.log(this.subjectdataarray);
      this.editsubjectForm.setValue({
        subject_id: data[0].subject_id,
        subject_title: data[0].subject_title,
        subject_description: data[0].subject_description
      });
    });
  }
  OnSubmit() {
    this.dbservice.subjectedit(this.editsubjectForm.value).then((confirmation: any) => {
    if (confirmation.message === "Success") {
    alert('Subject Details Updated')
    this.router.navigate(['/adminmaster/subject'])
    }})
    }
  }

    
      
  
