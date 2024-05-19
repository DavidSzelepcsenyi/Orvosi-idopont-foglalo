import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { MyAppointmentsComponent } from './my-appointments/my-appointments.component';
import { ScheduleComponent} from './schedule/schedule.component';
import { DocInfComponent } from './doc-inf/doc-inf.component';
import { AuthGuardService } from './services/auth-guard.service';
import { DoctorsScheduleComponent } from './doctors-schedule/doctors-schedule.component';


const routes: Routes = [
  { path: '', redirectTo: 'DoctorsSchedule', pathMatch: 'full'},
  { path: 'Register', component: RegisterComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Appointments', canActivate: [AuthGuardService] ,component: AppointmentsComponent },
  { path: 'MyAppointments', canActivate: [AuthGuardService], component: MyAppointmentsComponent },
  { path: 'AddDocInf',canActivate: [AuthGuardService],data: { requiresDoctor: true }, component: DocInfComponent},
  { path: 'AddSchedule', canActivate: [AuthGuardService],data: { requiresDoctor: true }, component: ScheduleComponent },
  { path: 'DoctorsSchedule',component: DoctorsScheduleComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],


  exports: [RouterModule]
})
export class AppRoutingModule { }
