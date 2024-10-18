import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbserviceService {
  updatecoursedata(value: any) {
    throw new Error('Method not implemented.');
  }
  getsubjectbaseid(arg0: { courseid: any; }) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }
  
  //Adminlogin
  adminlogin(data:any){
    console.log(data)
      return this.http.post("http://localhost:3000/adminlogin",data).toPromise()
      }

      //Subject registration
  subjectreg(data:any){
    console.log(data)
      return this.http.post("http://localhost:3000/subjectreg",data).toPromise()
      }

      
      //  Qualification registration
      qualificationreg(data:any){
    console.log(data)
      return this.http.post("http://localhost:3000/qualificationreg",data).toPromise()
      }
       
      // District view

      district(){
        
          return this.http.get("http://localhost:3000/districts").toPromise()
          }

      //Subject view

      subjects(){
        
        return this.http.get("http://localhost:3000/subjects").toPromise()
        }

     //Qualification view
    
     qualifications(){
        
      return this.http.get("http://localhost:3000/qualifications").toPromise()
      }

      //Get subjects

      getsujectbaseid(subject_id: any) {
        console.log(subject_id);
        return this.http.post<any>("http://localhost:3000/getsubject", 
        subject_id)}


    //subject edit

    subjectedit(data:any){
      console.log(data)
        return this.http.post("http://localhost:3000/subjectedit",data).toPromise()
        }

        //Get qualification

      getqualificationbaseid(qualification_id: any) {
        console.log(qualification_id);
        return this.http.post<any>("http://localhost:3000/getqualification", 
        qualification_id)}

    //Qualification edit

    qualificationedit(data:any){
      console.log(data)
        return this.http.post("http://localhost:3000/qualificationedit",data).toPromise()
        }

         //Tutor registration
  tutorreg(data:any){
    console.log(data)
      return this.http.post("http://localhost:3000/tutorreg",data).toPromise()
      }

           //Candidate registration
           candidatereg(candidateData: any): Promise<any> {
            return this.http.post('http://localhost:3000/candidatereg', candidateData).toPromise()
           }

      //Delete

      subjectdelete(data: any) {
        return this.http.post("http://localhost:3000/subjectdelete",  data).toPromise()
      }

      qualificationdelete(data: any) {
        return this.http.post("http://localhost:3000/qualificationdelete",  data).toPromise()
      }
     
      //Tutor request view
      tutorrequestview(){
        
        return this.http.get("http://localhost:3000/tutorrequestview").toPromise()
        }

      //tutor accept

      tutoraccept(data:any){
        console.log(data)
          return this.http.post("http://localhost:3000/tutoraccept",data).toPromise()
          }

      //tutor reject

      tutorreject(data:any){
        console.log(data)
          return this.http.post("http://localhost:3000/tutorreject",data).toPromise()
          }

      //tutor login

      tutorlogin(data:any){
        console.log(data)
          return this.http.post("http://localhost:3000/tutorlogin",data).toPromise()
          }

    //Candidate Login

    candidatelogin(data:any){
      console.log(data)
        return this.http.post("http://localhost:3000/candidatelogin",data).toPromise()
        }

    //Add subject

    addsubject(data:any){
      console.log(data)
        return this.http.post("http://localhost:3000/addsubject",data).toPromise()
        }

    //view add

    viewadd(data:any){
        
      return this.http.post("http://localhost:3000/viewadd",data).toPromise()
      }

      deletesub(data: any) {
        return this.http.post("http://localhost:3000/deletesub",  data).toPromise()
      }

      //add material

      addmaterial(data:any){
        console.log(data)
          return this.http.post("http://localhost:3000/addmaterial",data).toPromise()
          }






          upload(file: File): Observable<HttpEvent<any>> {
            const formData: FormData = new FormData();
            formData.append('file', file);
            const req = new HttpRequest('POST', `http://localhost:3000/upload`, 
            formData, {
            reportProgress: true,
            responseType: 'json'
            });
            return this.http.request(req);
            
}

tutorsubject(data:any){
  console.log(data)   
  return this.http.post("http://localhost:3000/tutorsubject",data).toPromise()
  }

  material(data:any){
    console.log(data)
      return this.http.post("http://localhost:3000/materialview",data).toPromise()
      }

      
     

    deletematerial(data: any) {
      return this.http.post("http://localhost:3000/deletematerial",  data).toPromise()
    }

    profileview(tutorid: any) {
      console.log(tutorid);
      return this.http.post<any>("http://localhost:3000/profileview", 
      tutorid)}
 

      profileupdate(data:any){
        console.log(data)
          return this.http.post("http://localhost:3000/profileupdate",data).toPromise()
          }



          
      tutorview(){
        
        return this.http.get("http://localhost:3000/tutorview").toPromise()
        }


        tutorbaseid(tutore_id: any) {
          console.log(tutore_id);
          return this.http.post<any>("http://localhost:3000/gettutor", 
          tutore_id)}
  
               
         gettutorsubject(tutore_id: any) {
          console.log(tutore_id);
          return this.http.post<any>("http://localhost:3000/gettutorsubject", 
          tutore_id)}
  
      
          request(data:any){
            console.log(data)
              return this.http.post("http://localhost:3000/sendrequest",data).toPromise()
              }

              viewrequest(data:any){
                console.log(data)
                  return this.http.post("http://localhost:3000/viewrequest",data).toPromise()
                  }


               viewrequests(data:any){
                console.log(data)
                   return this.http.post("http://localhost:3000/cdtviewrequests",data).toPromise()
                  }


                  candidateaccept(data:any){
                    console.log(data)
                      return this.http.post("http://localhost:3000/candidateaccept",data).toPromise()
                      }


                      candidatereject(data:any){
                        console.log(data)
                          return this.http.post("http://localhost:3000/candidatereject",data).toPromise()
                          }

                          materials(data:any){
                            console.log(data)
                              return this.http.post("http://localhost:3000/cdtmaterialview",data).toPromise()
                              }
            

                              candidateview(){
        
                                return this.http.get("http://localhost:3000/candidateview").toPromise()
                                }

                                candidaterequestview(){
        
                                  return this.http.get("http://localhost:3000/candidaterequestview").toPromise()
                                  }


                                subjectwisetutor(){
        
                                    return this.http.get("http://localhost:3000/subjectwisetutor").toPromise()
                                    }
}

