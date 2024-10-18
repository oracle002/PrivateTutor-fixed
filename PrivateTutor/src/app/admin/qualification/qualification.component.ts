import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss']
})
export class QualificationComponent implements OnInit {

  public Subjectsdetails: any[] = [];
  constructor(private dbservice: DbserviceService,private router:Router) { }

  ngOnInit(): void {
    this.viewqualification()
  }

  viewqualification(){
  this.dbservice.qualifications().then((data: any) => {
    this.Subjectsdetails =data;
    this.router.navigate(['/adminmaster/qualification'])
  })
}
qualificationdelete(	qualification_id: string) {
    this.dbservice.qualificationdelete({ 	qualification_id }).then((confirmation: any) => {
    if (confirmation.message === "Success") {
    alert('Sucessfully Deleted')
   this.viewqualification();
    }
    })}

}

 
