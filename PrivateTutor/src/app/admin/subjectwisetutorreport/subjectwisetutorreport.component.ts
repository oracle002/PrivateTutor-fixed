import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';
import { ElementRef, ViewChild } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-subjectwisetutorreport',
  templateUrl: './subjectwisetutorreport.component.html',
  styleUrls: ['./subjectwisetutorreport.component.scss']
})
export class SubjectwisetutorreportComponent implements OnInit {
  @ViewChild('TABLE', { static: false }) TABLE: ElementRef;

  title = 'Excel';
  ExportTOExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.TABLE.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'ScoreSheet.xlsx');
  }
  public Subjectsdetails: any[] = [];
  constructor(private dbservice: DbserviceService,private router:Router) { }

  ngOnInit(): void {
    this.viewcandidate()
  }

  viewcandidate(){
  this.dbservice.subjectwisetutor().then((data: any) => {
    this.Subjectsdetails =data;
    this.router.navigate(['/adminmaster/subjectwisetutorreport'])
  })
}
 

}