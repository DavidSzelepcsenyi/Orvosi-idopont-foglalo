import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { MyAppointmentsComponent } from './my-appointments/my-appointments.component';
import { ScheduleComponent} from './schedule/schedule.component';
import { DocInfComponent } from './doc-inf/doc-inf.component';

const routes: Routes = [
  { path: '', redirectTo: 'Register', pathMatch: 'full'},
  { path: 'Register', component: RegisterComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Appointments', component: AppointmentsComponent },
  { path: 'MyAppointments', component: MyAppointmentsComponent },
  { path: 'DocInf', component: DocInfComponent},
  { path: 'Schedule', component: ScheduleComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
