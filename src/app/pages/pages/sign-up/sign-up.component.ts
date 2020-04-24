import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '@services/*';

import { BlankLayoutCardComponent } from 'app/components/blank-layout-card';

@Component({
  selector: 'app-sign-up',
  styleUrls: ['../../../components/blank-layout-card/blank-layout-card.component.scss'],
  templateUrl: './sign-up.component.html',
})
export class SignUpComponent extends BlankLayoutCardComponent implements OnInit {

  public signupForm: FormGroup;
  private email;
  private password;
  private name;
  public emailPattern = '^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$';
  public error: string;

  constructor(private authService: AuthService,
              private fb: FormBuilder,
              private router: Router) {
    super();

    this.signupForm = this.fb.group({
      password: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(this.emailPattern),
        Validators.maxLength(20),
      ]),
      name: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    });
    this.email = this.signupForm.get('email');
    this.password = this.signupForm.get('password');
    this.name = this.signupForm.get('name');
  }

  public ngOnInit() {
    this.authService.logout();
    this.signupForm.valueChanges.subscribe((data: any[]) => {
      this.error = null;
    });
  }

  public signup() {
    // this.error = null;
    console.log(this.signupForm.value);
    if (this.signupForm.value) {
      this.authService.signup(this.signupForm.getRawValue())
        .subscribe(res => this.router.navigate(['/app/dashboard']),
                   error => this.error = error.message);
    }
  }

  public onInputChange(event) {
    event.target.required = true;
  }
}
