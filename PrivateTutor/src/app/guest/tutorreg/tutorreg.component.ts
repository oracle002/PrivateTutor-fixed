import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-tutorreg',
  templateUrl: './tutorreg.component.html',
  styleUrls: ['./tutorreg.component.scss']
})

export class TutorregComponent implements OnInit {

  public Districtdetails: any[] = [];
  public Qualificationdetails: any[] = [];
  validationstatus: boolean = false;

  myDate: any;
  tutorregForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private dbservice: DbserviceService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    // Set current date in 'yyyy-MM-dd' format
    this.myDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');

    // Initialize the form with validators
    this.tutorregForm = this.fb.group({
      tutor_name: ['', Validators.required],
      tutor_phoneno: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]], // Assuming a 10-digit phone number
      tutor_email: ['', [Validators.required, Validators.email]],
      tutor_password: ['', [Validators.required, Validators.minLength(6)]], // Minimum password length of 6
      qualification_id: ['', Validators.required],
      district_id: ['', Validators.required],
      tutor_gender: ['', Validators.required],
      tutor_status: ['Registered'], // Default status
      date_of_registration: [this.myDate] // Pre-populated registration date
    });

    // Fetching district and qualification details from the service
    this.dbservice.district().then((data: any) => {
      this.Districtdetails = data;
    });

    this.dbservice.qualifications().then((data: any) => {
      this.Qualificationdetails = data;
    });
  }

  onSubmit() {
    // Check if the form is valid
    if (!this.tutorregForm.valid) {
      this.validationstatus = true; // Trigger validation error messages
      return;
    }

    this.validationstatus = false; // Reset validation status

    const formData = this.tutorregForm.value; // Capture form data

    // Call the service to register the tutor
    this.dbservice.tutorreg(formData)
      .then((response) => {
        console.log(response);
        alert('Registration successful!');
        this.router.navigate(['/tutorlogin']); // Navigate to tutor login on success
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Registration failed! Please try again.'); // Show error message on failure
      });
  }
}
