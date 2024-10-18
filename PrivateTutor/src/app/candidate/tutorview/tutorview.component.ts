import { Component, OnInit } from '@angular/core';
import { DbserviceService } from 'src/app/dbservice.service';
@Component({
  selector: 'app-tutorview',
  templateUrl: './tutorview.component.html',
  styleUrls: ['./tutorview.component.scss']
})
export class TutorviewComponent implements OnInit {

  public tutordetails: any[] = [];
  public qualifications: any[] = [];
  constructor(private dbservice: DbserviceService) { }

  ngOnInit(): void {
    this.dbservice.tutorview().then((data: any) => {
      this.tutordetails =data;
    })
    this.dbservice.qualifications().then((data: any) => {
      this.qualifications =data;
    })
  }

}
 
