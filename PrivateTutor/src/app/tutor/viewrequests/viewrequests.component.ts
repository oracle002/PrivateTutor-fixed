import { Component, OnInit } from '@angular/core';
import { DbserviceService } from 'src/app/dbservice.service';
@Component({
  selector: 'app-viewrequests',
  templateUrl: './viewrequests.component.html',
  styleUrls: ['./viewrequests.component.scss']
})
export class ViewrequestsComponent implements OnInit {

  public requestdetails: any[] = [];
  tutor_id: any;
  id:any;
  public r: any[] = [];
  constructor(private dbservice: DbserviceService) { }

  ngOnInit(): void {

    this.	tutor_id=localStorage.getItem("tutor_id")
    this.candidateview();
    
  }

  candidateview(){
    
    this.dbservice.viewrequests({id:this.tutor_id}).then((data: any) => {
      this.requestdetails =data;
    })

  }


    candidateaccept(candidaterequest_id: string) {
    this.dbservice.candidateaccept({candidaterequest_id }).then((confirmation: any) => {
    if (confirmation.message === "Success") {
    alert('Do you want to Accepted')
   this.candidateview();
    }
    })}

     
    candidatereject(candidaterequest_id: string) {
    this.dbservice.candidatereject({candidaterequest_id }).then((confirmation: any) => {
    if (confirmation.message === "Success") {
    alert('Do you want to Reject')
   this.candidateview();
    }
    })}
  

}
 

