import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { MyAppointmentsComponent } from './my-appointments/my-appointments.component';
import { ScheduleComponent} from './schedule/schedule.component';
import { DocInfComponent } from './doc-inf/doc-inf.component';
import { DoctorsScheduleComponent } from './doctors-schedule/doctors-schedule.component';
import { AuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectToLogin = () => redirectUnauthorizedTo(["Login"])



export const routes: Routes = [
  { path: '', redirectTo: 'DoctorsSchedule', pathMatch: 'full'},
  { path: 'Register', component: RegisterComponent },
  { path: 'Login', component: LoginComponent },
  { 
    path: 'Appointments',
    component: AppointmentsComponent ,
    canActivate: [AuthGuard],
    data: {authGuardPipe: redirectToLogin}
  },
  { 
    path: 'MyAppointments',
    component: MyAppointmentsComponent,
    canActivate: [AuthGuard],
    data: {authGuardPipe: redirectToLogin}
  },
  { 
    path: 'AddDocInf',
    component: DocInfComponent,
    canActivate: [AuthGuard],
    data: {authGuardPipe: redirectToLogin}
  },
  { 
    path: 'AddSchedule',
    component: ScheduleComponent,
    canActivate: [AuthGuard],
    data: {authGuardPipe: redirectToLogin}
  },
  { 
    path: 'DoctorsSchedule',
    component: DoctorsScheduleComponent,
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],


  exports: [RouterModule]
})
export class AppRoutingModule { }
