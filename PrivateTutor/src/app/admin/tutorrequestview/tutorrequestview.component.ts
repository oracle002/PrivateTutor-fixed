import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { Router} from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';
@Component({
  selector: 'app-tutorrequestview',
  templateUrl: './tutorrequestview.component.html',
  styleUrls: ['./tutorrequestview.component.scss']
})
export class TutorrequestviewComponent  implements OnInit {

  public tutorrequestdetails: any[] = [];
  
  constructor(private fb: FormBuilder,private dbservice: DbserviceService,private router:Router) { }

  ngOnInit(): void {
    this.tutorview();
  }
  tutorview()
  {
    this.dbservice.tutorrequestview().then((data: any) => {
      this.tutorrequestdetails =data;
      this.router.navigate(['/adminmaster/tutorrequestview'])
    })
  }
  
  
  tutoraccept(tutor_id: string) {
    this.dbservice.tutoraccept({tutor_id }).then((confirmation: any) => {
    if (confirmation.message === "Success") {
    alert('Do you want to Accepted')
   this.tutorview();
    }
    })}

     
    tutorreject(tutor_id: string) {
    this.dbservice.tutorreject({tutor_id }).then((confirmation: any) => {
    if (confirmation.message === "Success") {
    alert('Do you want to Reject')
   this.tutorview();
    }
    })}
      
     
    

} 