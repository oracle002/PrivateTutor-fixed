import { DatePipe } from '@angular/common';
import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-addmaterial',
  templateUrl: './addmaterial.component.html',
  styleUrls: ['./addmaterial.component.scss']
})
export class AddmaterialComponent implements OnInit {
  
  selectedFiles?: FileList;
  currentFile?: any;
  message ='';
  fileInfos?: Observable<any>
  public Subjectsdetails: any[] = [];
  tutorid: any;
  myDate: any;
  materialForm!: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private dbservice: DbserviceService, private datePipe: DatePipe) { }




  ngOnInit(): void {
    this.myDate = this.datePipe.transform(new Date().toLocaleDateString(), 'yyyy-MM-dd');
    this.tutorid=localStorage.getItem("tutor_id")
    this.materialForm = this.fb.group({
      material_title: [''],
      subject_id: [''],
      material_referencelink: [''],
      material_description: [''],
      material_thumbnail: [''],
      tutor_id : this.tutorid,
      material_postdate: this.myDate

    })
    this.dbservice.tutorsubject(this.materialForm.value).then((data: any) => {
      this.Subjectsdetails =data;
    })
  }
   
    selectFile(event: any): void {
      this.selectedFiles= event.target.files;
    }

 
  OnSubmit() {

    if (this.selectedFiles) {
      // console.log(this.selectedFiles);
      const file: File | null = this.selectedFiles.item(0);
      
      if (file) {
      this.currentFile = file;
      
      this.dbservice.upload(this.currentFile).subscribe(
      (event: any) => {
      this.message = event.body.message; }) ;
      } }
      this.materialForm.value.material_thumbnail=this.currentFile.name;
   
      this.dbservice.addmaterial(this.materialForm.value).then((confirmation: any) => {
        if (confirmation.message === "Success") {
          alert('Material Created')
          this.router.navigate(['/tutormaster/tutorhome'])
        }
        else {
          alert('data already exists, Please check your data')
        }
      })
    }
  }



