import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginFormGroup: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    const email = this.loginFormGroup.get('email')?.value as string;
    const password = this.loginFormGroup.get('password')?.value as string;
    this.authService.login(email, password)
      .then((userCredential) => {
        this.router.navigate(['/MyAppointments']);
      })
      .catch((error) => {
        window.location.reload()
      });
  }
}
