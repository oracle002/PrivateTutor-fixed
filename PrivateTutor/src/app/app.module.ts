import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuestMasterComponent } from './guest/guest-master/guest-master.component';
import { GuestHomeComponent } from './guest/guest-home/guest-home.component';
import { AdminloginComponent } from './guest/adminlogin/adminlogin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { AdminmasterComponent } from './admin/adminmaster/adminmaster.component';
import { SubjectsComponent } from './admin/subjects/subjects.component';

import { DistrictsComponent } from './admin/districts/districts.component';
import { SubjectregComponent } from './admin/subjectreg/subjectreg.component';
import { QualificationComponent } from './admin/qualification/qualification.component';
import { QualificationregComponent } from './admin/qualificationreg/qualificationreg.component';
import { SubjecteditComponent } from './admin/subjectedit/subjectedit.component';
import { QualificationeditComponent } from './admin/qualificationedit/qualificationedit.component';
import { TutorregComponent } from './guest/tutorreg/tutorreg.component';
import { CandidateregComponent } from './guest/candidatereg/candidatereg.component';
import { DatePipe } from '@angular/common';
import { TutorrequestviewComponent } from './admin/tutorrequestview/tutorrequestview.component';
import { TutorloginComponent } from './guest/tutorlogin/tutorlogin.component';
import { TutorhomeComponent } from './tutor/tutorhome/tutorhome.component';
import { TutormasterComponent } from './tutor/tutormaster/tutormaster.component';
import { CandidatemasterComponent } from './candidate/candidatemaster/candidatemaster.component';
import { CandidatehomeComponent } from './candidate/candidatehome/candidatehome.component';
import { CandidateloginComponent } from './guest/candidatelogin/candidatelogin.component';
import { AddsubjectComponent } from './tutor/addsubject/addsubject.component';
import { AddmaterialComponent } from './tutor/addmaterial/addmaterial.component';
import { MaterialComponent } from './tutor/material/material.component';
import { ProfileviewComponent } from './tutor/profileview/profileview.component';
import { SubjectreportComponent } from './admin/subjectreport/subjectreport.component';
import { TutorviewComponent } from './candidate/tutorview/tutorview.component';
import { MoreviewComponent } from './candidate/moreview/moreview.component';
import { ViewrequestComponent } from './candidate/viewrequest/viewrequest.component';
import { ViewrequestsComponent } from './tutor/viewrequests/viewrequests.component';
import { ViewmaterialComponent } from './candidate/viewmaterial/viewmaterial.component';
import { TutorreportComponent } from './admin/tutorreport/tutorreport.component';
import { CandidatereportComponent } from './admin/candidatereport/candidatereport.component';
import { CandidaterequestreportComponent } from './admin/candidaterequestreport/candidaterequestreport.component';
import { SubjectwisetutorreportComponent } from './admin/subjectwisetutorreport/subjectwisetutorreport.component';


@NgModule({
  declarations: [
    AppComponent,
    GuestMasterComponent,
    GuestHomeComponent,
    AdminloginComponent,
    AdminhomeComponent,
    AdminmasterComponent,
    SubjectsComponent,
    DistrictsComponent,
    SubjectregComponent,
    QualificationComponent,
    QualificationregComponent,
    SubjecteditComponent,
    QualificationeditComponent,
    TutorregComponent,
    CandidateregComponent,
    TutorrequestviewComponent,
    TutorloginComponent,
    TutorhomeComponent,
    TutormasterComponent,
    CandidatemasterComponent,
    CandidatehomeComponent,
    CandidateloginComponent,
    AddsubjectComponent,
    AddmaterialComponent,
    MaterialComponent,
    ProfileviewComponent,
    SubjectreportComponent,
    TutorviewComponent,
    MoreviewComponent,
    ViewrequestComponent,
    ViewrequestsComponent,
    ViewmaterialComponent,
    TutorreportComponent,
    CandidatereportComponent,
    CandidaterequestreportComponent,
    SubjectwisetutorreportComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
    
    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
