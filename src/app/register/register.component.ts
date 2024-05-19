import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { User } from '../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerFormGroup = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    username: new FormControl(""),
    email: new FormControl(""),
    password: new FormControl(""),
    repeatPassword: new FormControl(""),
    isDoctor: new FormControl(false)
  });

  constructor(private authService: AuthService, private userService: UserService, private router: Router) { }

  onSubmit() {
    const email = this.registerFormGroup.get("email")?.value as string;
    const password = this.registerFormGroup.get("password")?.value as string;
  
    this.authService.register(email, password)
      .then((registerResult) => {
        const uid = registerResult.user.uid;
        const firstName = this.registerFormGroup.get("firstName")?.value as string;
        const lastName = this.registerFormGroup.get("lastName")?.value as string;
        const username = this.registerFormGroup.get("username")?.value as string;
        const isDoctor = this.registerFormGroup.get("isDoctor")?.value as boolean;
  
        const user = new User(uid, email, firstName, lastName, username, isDoctor);
        this.userService.create(user);
      })
      .catch((error) => {
        console.error('Error registering user: ', error);
      });
      this.router.navigate(['/DoctorsSchedule']);
  }
  
}

