import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { AdminloginComponent } from './guest/adminlogin/adminlogin.component';
import { AdminmasterComponent } from './admin/adminmaster/adminmaster.component';
import { GuestHomeComponent } from './guest/guest-home/guest-home.component';
import { GuestMasterComponent } from './guest/guest-master/guest-master.component';
import { SubjectsComponent } from './admin/subjects/subjects.component';
import { DistrictsComponent } from './admin/districts/districts.component';
import { SubjectregComponent } from './admin/subjectreg/subjectreg.component';
import { QualificationComponent } from './admin/qualification/qualification.component';
import { QualificationregComponent } from './admin/qualificationreg/qualificationreg.component';
import { SubjecteditComponent } from './admin/subjectedit/subjectedit.component';
import { QualificationeditComponent } from './admin/qualificationedit/qualificationedit.component';
import { TutorregComponent } from './guest/tutorreg/tutorreg.component';
import { CandidateregComponent } from './guest/candidatereg/candidatereg.component';
import { TutorrequestviewComponent } from './admin/tutorrequestview/tutorrequestview.component';
import { TutorloginComponent } from './guest/tutorlogin/tutorlogin.component';
import { TutormasterComponent } from './tutor/tutormaster/tutormaster.component';
import { TutorhomeComponent } from './tutor/tutorhome/tutorhome.component';
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

const routes: Routes = [{
  path: 'Guest', component: GuestMasterComponent,
  children: [
    { path: 'Home', component: GuestHomeComponent },
    { path: 'adminlogin', component: AdminloginComponent },
    {path:'tutorreg',component:TutorregComponent},
    {path:'candidatereg',component:CandidateregComponent},
    {path:'tutorlogin',component:TutorloginComponent},
    {path:'candidatelogin',component:CandidateloginComponent}
  ]
},
{
  path: 'adminmaster', component: AdminmasterComponent,
  children: [
    { path: 'adminhome', component: AdminhomeComponent },
    { path: 'subject', component: SubjectsComponent },
    {path:'district',component:DistrictsComponent},
    {path:'subjectreg',component:SubjectregComponent},
    {path:'qualification',component:QualificationComponent},
    {path:'qualificationreg',component:QualificationregComponent},
    {path:'subjectedit/:id',component:SubjecteditComponent},
    {path:'qualificationedit/:id',component:QualificationeditComponent},
    {path:'tutorrequestview',component:TutorrequestviewComponent},
    {path:'subjectreport',component:SubjectreportComponent},
    {path:'tutorreport',component:TutorreportComponent},
    {path:'candidatereport',component:CandidatereportComponent},
    {path:'candidaterequestreport',component:CandidaterequestreportComponent},
    {path:'subjectwisetutorreport',component:SubjectwisetutorreportComponent},
    
  ]
},
{
 path:'tutormaster',component:TutormasterComponent,
 children:[
  {path:'tutorhome',component:TutorhomeComponent},
  {path:'addsubject',component:AddsubjectComponent},
  {path:'addmaterial',component:AddmaterialComponent},
  {path:'material',component:MaterialComponent},
  {path:'profileview',component:ProfileviewComponent},
  {path:'viewrequests',component:ViewrequestsComponent}
 
 ]
},{path:'candidatemaster',component:CandidatemasterComponent,
children:[ 
  {path:'candidatehome',component:CandidatehomeComponent},
  {path:'tutorview',component:TutorviewComponent},
  {path:'moreview/:id',component:MoreviewComponent},
  {path:'viewrequest',component:ViewrequestComponent},
  {path:'viewmaterial/:id',component:ViewmaterialComponent},
]},
{ path: '', redirectTo: '/Guest/Home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
