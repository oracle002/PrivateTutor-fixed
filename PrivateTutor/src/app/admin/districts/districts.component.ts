import { Component, OnInit } from '@angular/core';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-districts',
  templateUrl: './districts.component.html',
  styleUrls: ['./districts.component.scss']
})
export class DistrictsComponent implements OnInit {

  public Districtdetails: any[] = [];
  constructor(private dbservice: DbserviceService) { }

  ngOnInit(): void {
    this.dbservice.district().then((data: any) => {
      this.Districtdetails =data;
    })
  }

}
 