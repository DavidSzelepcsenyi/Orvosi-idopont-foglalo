import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFirestore } from "@angular/fire/compat/firestore"
import { Doctor } from '../model/doctor';
import { DocInfService } from '../services/doc-inf.service';
import { getAuth } from "firebase/auth";
import { Time } from '@angular/common';
import { User } from '../model/user';
import { UserService } from '../services/user.service';
import { Appointment } from '../model/appointment';
import { AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'app-my-appointments',
  templateUrl: './my-appointments.component.html',
  styleUrl: './my-appointments.component.css'
})
export class MyAppointmentsComponent {

  currentUser: any;
  Appointments: Appointment[] = [];
  MyAppointments: Appointment[] = [];

  constructor( 
    private docInfService: DocInfService, 
    private router: Router, 
    private firestore: AngularFirestore, 
    private authService: AuthService, 
    private AppointmentService : AppointmentService, 
    private UserService: UserService,
    private DoctorService: DocInfService
  ) { }

  ngOnInit() {
    this.authService.user$.subscribe(user => {
      this.currentUser = user;
    });
    this.AppointmentService.findAll().subscribe(appointments => {
      this.Appointments = appointments;
      this.MyAppointments = this.Appointments.filter(appointment => appointment.patient === this.currentUser.uid);
    });
  }

  onDeleteAppointment(appointmentId: string) {
    this.AppointmentService.delete(appointmentId)
      .then(() => {
        this.Appointments = this.Appointments.filter(appointment => appointment.id !== appointmentId);
      },
      (error) => {
        console.error('Error deleting appointment:', error);
      });
    }



}
