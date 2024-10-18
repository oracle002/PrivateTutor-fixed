import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-candidatereg',
  templateUrl: './candidatereg.component.html',
  styleUrls: ['./candidatereg.component.scss']
})
export class CandidateregComponent implements OnInit {
  public Districtdetails: any[] = [];
  validationstatus: boolean = false; // Initialize to false
  myDate: any;
  candidateregForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dbservice: DbserviceService,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.myDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.candidateregForm = this.fb.group({
      candidate_name: ['', Validators.required],
      candidate_phoneno: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]], // Phone number validation
      candidate_email: ['', [Validators.required, Validators.email]], // Email validation
      candidate_password: ['', [Validators.required, Validators.minLength(6)]], // Password validation
      candidate_age: ['', [Validators.required, Validators.min(1), Validators.max(100)]], // Age validation
      district_id: ['', Validators.required],
      candidate_gender: ['', Validators.required],
      date_of_registration: this.myDate
    });

    // Fetch district details
    this.dbservice.district().then((data: any) => {
      this.Districtdetails = data;
    });
  }

  onSubmit() {
    console.log("Submit button clicked"); // Debugging log
    this.validationstatus = true; // Show validation messages on submit
    if (this.candidateregForm.invalid) {
        console.log("Form is invalid"); // Debugging log
        return;
    }

    console.log("Form values:", this.candidateregForm.value); // Debugging log
    this.dbservice.candidatereg(this.candidateregForm.value).then((confirmation: any) => {
        if (confirmation.message === "Success") {
            alert(' Details Created');
            this.router.navigate(['/Guest/Home']);
        } else {
            alert('Data already exists, please check your data');
        }
    }).catch((error) => {
        console.error('Registration error:', error);
        alert('There was an error during registration. Please try again.');
    });
}

}
