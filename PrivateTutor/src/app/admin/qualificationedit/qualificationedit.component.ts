import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { ActivatedRoute, ParamMap, Router,} from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-qualificationedit',
  templateUrl: './qualificationedit.component.html',
  styleUrls: ['./qualificationedit.component.scss']
})
export class QualificationeditComponent implements OnInit {
  qualification_id: any;
  public qualificationdataarray: any;
  editqualificationForm!:FormGroup;
  validationstatus: false;
  constructor(private fb: FormBuilder,private router:Router, private route: ActivatedRoute,
    private dbservice: DbserviceService) {
    this.route.paramMap.subscribe((params: ParamMap) => {
    this.qualification_id = params.get('id')
    })}
    ngOnInit(): void {
      this.editqualificationForm = this.fb.group({
        qualification_id: [''],
        qualification_title: [''],
        qualification_description: ['']
      })
      const id=this.qualification_id
      this.dbservice.getqualificationbaseid({id}).subscribe((data: 
      any) => {
      this.qualificationdataarray = data;
      console.log(this.qualificationdataarray);
      this.editqualificationForm.setValue({
        qualification_id: data[0].qualification_id,
        qualification_title: data[0].qualification_title,
        qualification_description: data[0].qualification_description
      });
    });
  }
  OnSubmit() {
    this.dbservice.qualificationedit(this.editqualificationForm.value).then((confirmation: any) => {
    if (confirmation.message === "Success") {
    alert('Subject Details Updated')
    this.router.navigate(['/adminmaster/qualification'])
    }})
    }
  }