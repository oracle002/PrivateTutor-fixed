import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Added Validators for form validation
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-candidatelogin',
  templateUrl: './candidatelogin.component.html',
  styleUrls: ['./candidatelogin.component.scss']
})
export class CandidateloginComponent implements OnInit {
  public loginStatus = false; // Changed from Loginstatus to loginStatus for consistency
  public loginForm: FormGroup; // Use FormGroup type for better clarity
  candidatelist: any;

  constructor(private fb: FormBuilder, private router: Router, private dbservice: DbserviceService) {
    // Initialize the form with validation
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]], // Added Validators to check if the fields are empty
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    // Any additional initialization can go here
  }

  OnSubmit(): void {
    if (this.loginForm.valid) { // Check if the form is valid before submitting
      this.dbservice.candidatelogin(this.loginForm.value).then((data: any) => {
        this.candidatelist = data;

        if (this.candidatelist.length === 0) {
          // Check if the response data is empty
          alert('Invalid Username or Password');
        } else {
          // Store the candidate ID in localStorage
          localStorage.setItem('candidate_id', this.candidatelist[0].candidate_id);
          console.log(this.candidatelist);
          // Navigate to the candidate home page
          this.router.navigate(['/candidatemaster/candidatehome']);
        }
      }).catch((error) => {
        // Handle any errors from the service
        console.error('Login error:', error);
        alert('An error occurred while logging in. Please try again later.');
      });
    } else {
      alert('Please fill in all required fields.'); // Alert for invalid form
    }
  }
}
