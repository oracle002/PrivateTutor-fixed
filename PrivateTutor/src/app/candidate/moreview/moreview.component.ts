import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { ActivatedRoute, ParamMap, Router,} from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';
@Component({
  selector: 'app-moreview',
  templateUrl: './moreview.component.html',
  styleUrls: ['./moreview.component.scss']
})
export class MoreviewComponent implements OnInit {
  tutor_id: any;
  candidate_id: any;
  myDate: any;
  public tutordetails: any;
  public tutorsubjectdetails: any;
  requestForm!: FormGroup;
  
  constructor(private fb: FormBuilder,private router:Router, private route: ActivatedRoute,private dbservice: DbserviceService,private datePipe: DatePipe) {
    this.route.paramMap.subscribe((params: ParamMap) => {
    this.tutor_id = params.get('id')
    })}
    ngOnInit(): void {
      this.myDate = this.datePipe.transform(new Date().toLocaleDateString(), 'yyyy-MM-dd');
      this.candidate_id=localStorage.getItem("candidate_id")
      this.requestForm = this.fb.group({
       
        subject_id: [''],
        tutor_id:this.tutor_id,
        candidate_id:this.candidate_id,
        request_date:this.myDate,
       
  
  })
      
      const id=this.tutor_id
      this.dbservice.tutorbaseid({id}).subscribe((data: 
      any) => {
      this.tutordetails = data;
     
    });

    this.getsubject();
  }
  getsubject(){
    const id=this.tutor_id
    this.dbservice.gettutorsubject({id}).subscribe((data: 
    any) => {
    this.tutorsubjectdetails = data;
    })
  }
   OnSubmit() {
   this.dbservice.request(this.requestForm.value).then((confirmation: any) => {
    if (confirmation.message === "Success") {
      alert('request send')
      // this.router.navigate(['/tutormaster/tutorhome'])
    }
    else {
      alert('data already exists, Please check your data')
    }
  })
    }
  }
