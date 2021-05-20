import { Component, OnInit                  } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup = new FormGroup({
    name           : new FormControl('', Validators.required),
    surname        : new FormControl('', Validators.required),
    phoneNumber    : new FormControl('', Validators.required),
    dateOfBirth    : new FormControl('', Validators.required),
    currentPayment : new FormControl('', Validators.required),
    email          : new FormControl('', Validators.required),
    password       : new FormControl('', Validators.required),
    repeatPassword : new FormControl('', Validators.required),
  });

  constructor() { }

  ngOnInit(): void {
  }

}
