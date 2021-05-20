import { Component, OnInit                  } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    login    : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required),
  });

  constructor() { }

  ngOnInit(): void {
  }

  signIn() {
    console.log('%c Login:    ', 'color: #338333', this.loginForm.get('login')   ?.value);
    console.log('%c Password: ', 'color: #338333', this.loginForm.get('password')?.value);
  }
}
