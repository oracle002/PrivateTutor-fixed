import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {

  public Subjectsdetails: any[] = [];
  constructor(private dbservice: DbserviceService,private router:Router) { }

  ngOnInit(): void {
    this.viewsubjects()
  }

  viewsubjects(){
  this.dbservice.subjects().then((data: any) => {
    this.Subjectsdetails =data;
    this.router.navigate(['/adminmaster/subject'])
  })
}
  subjectdelete(	subject_id: string) {
    this.dbservice.subjectdelete({ 	subject_id }).then((confirmation: any) => {
    if (confirmation.message === "Success") {
    alert('Sucessfully Deleted')
   this.viewsubjects();
    }
    })}

}

 
