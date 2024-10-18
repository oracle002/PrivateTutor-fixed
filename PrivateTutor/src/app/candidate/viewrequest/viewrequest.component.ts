import { Component, OnInit } from '@angular/core';
import { DbserviceService } from 'src/app/dbservice.service';
@Component({
  selector: 'app-viewrequest',
  templateUrl: './viewrequest.component.html',
  styleUrls: ['./viewrequest.component.scss']
})
export class ViewrequestComponent implements OnInit {

  public requestdetails: any[] = [];
  candidate_id: any;
  id:any;
  constructor(private dbservice: DbserviceService) { }

  ngOnInit(): void {
    this.candidate_id=localStorage.getItem("candidate_id")
    this.dbservice.viewrequest({id:this.candidate_id}).then((data: any) => {
      this.requestdetails =data;
    })
    
  }

  

}
 
