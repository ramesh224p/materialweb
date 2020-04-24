import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '@services/';
import { BlankLayoutCardComponent } from 'app/components/blank-layout-card';

@Component({
  selector: 'app-login',
  styleUrls: ['../../../components/blank-layout-card/blank-layout-card.component.scss'],
  templateUrl: './login.component.html',
})
export class LoginComponent extends BlankLayoutCardComponent implements OnInit {
  public loginForm: FormGroup;
  private email;
  private password;
  public emailPattern = '^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$';
  public error: string;

  constructor(private authService: AuthService,
              private fb: FormBuilder,
              private router: Router) {
    super();

    this.loginForm = this.fb.group({
      password: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(this.emailPattern),
        Validators.maxLength(20),
      ]),
    });
    this.email = this.loginForm.get('email');
    this.password = this.loginForm.get('password');
  }

  // isValid(controlName){
  //   return this.loginForm.get(controlName).invalid && this.loginForm.get(controlName).touched;
  // }

  public ngOnInit() {
    this.authService.logout();
    this.loginForm.valueChanges.subscribe((data : any[]) => {
      this.error = null;
    });
  }

  public login() {
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value)
    .subscribe(data => {
        // console.log(data.val.token);
        // if(data){
          this.router.navigate(['/app/dashboard']);
        }
      // },
      // error => {
      //   console.log(error);
      // }
    );
    this.error = null;
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.getRawValue())
        .subscribe(res => this.router.navigate(['/app/dashboard']),
                   error => this.error = error.message);
    }
  }

  public onInputChange(event) {
    event.target.required = true;
  }
}
