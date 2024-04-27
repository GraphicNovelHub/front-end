import { Component } from '@angular/core';
import {AuthService} from "../../../shared/services/auth.service";
import {FormErrorStateMatcher} from "../../../shared/matcher/form-error-state-matcher";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginRequest} from "../../../shared/model/login-request.entity";
import {MatSnackBar} from "@angular/material/snack-bar";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";
import {RegisterRequest} from "../../../shared/model/register-request.entity";
import {LoginErrorComponent} from "../../components/login-error/login-error.component";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  matcher = new FormErrorStateMatcher();
  hidePassword: boolean = true;

  nameFormControl = new FormControl('',[Validators.required])
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required])
  constructor(private authService: AuthService, private _snackBar: MatSnackBar, private cookieService: CookieService,private router: Router )  {
  }
  doRegister(){
    let registerRequest: RegisterRequest;
    registerRequest = new RegisterRequest(this.nameFormControl.value!,this.emailFormControl.value!, this.passwordFormControl.value!, "USER");
    console.log(registerRequest.email);
    this.authService.register(registerRequest).subscribe((data) =>{
      this.cookieService.set('token', data.access_token);
      console.log(data);
      if(this.authService.loginCheck()){
        this.router.navigate(['/']);
      }
      else this.toggleMessageError();
    })

  }

  toggleMessageError(){
    this._snackBar.openFromComponent(LoginErrorComponent, {
      duration: 5000,
    });

  }
  togglePasswordVisibility(event: MouseEvent) {
    event.preventDefault();
    this.hidePassword = !this.hidePassword;
  }
}
