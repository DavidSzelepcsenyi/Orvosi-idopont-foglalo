import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFirestore } from "@angular/fire/compat/firestore"
import { Doctor } from '../model/doctor';
import { DocInfService } from '../services/doc-inf.service';
import { UserService } from '../services/user.service';
import { Appointment } from '../model/appointment';
import { AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.css'
})
export class AppointmentsComponent implements OnInit {

  currentUser: any;
  doctors: Doctor[] = [];
  doctorFirstName: any = "";
  doctorLastName: any ="";
  patientFirstName: any = "";
  patientLastName: any ="";
  room: any ="";

  appointmentFormGroup = new FormGroup({
    Start: new FormControl(),
    End: new FormControl(),
    selectedDoctor: new FormControl(),
  });

  constructor( 
    private docInfService: DocInfService, 
    private router: Router, 
    private firestore: AngularFirestore, 
    private authService: AuthService, 
    private appointmentService : AppointmentService, 
    private UserService: UserService,
    private DoctorService: DocInfService
  ) { }

  ngOnInit() {
    this.authService.user$.subscribe(user => {
      this.currentUser = user;
      this.docInfService.findAll().subscribe(doctors => {
        this.doctors = doctors;
      });
      this.UserService.findUserByID(this.currentUser.uid).subscribe(user => {
        this.patientFirstName = user?.firstName;
        this.patientLastName = user?.lastName;
      });
    });
  }

  onSubmit() {
    const aid = this.firestore.createId()
    const Start = this.appointmentFormGroup.get("Start")?.value;
    const End = this.appointmentFormGroup.get("End")?.value;
    const selectedDoctor = this.appointmentFormGroup.get("selectedDoctor")?.value;

    this.DoctorService.findDoctorByID(selectedDoctor).subscribe(doctor => {
      this.doctorFirstName = doctor?.firstName;
      this.doctorLastName = doctor?.lastName;
      this.room = doctor?.room
      
      const appointment = new Appointment(aid,selectedDoctor, this.doctorFirstName, this.doctorLastName ,this.currentUser.uid,this.patientFirstName,this.patientLastName, Start, End, this.room);
      this.appointmentService.create(appointment);
      this.router.navigate(['/MyAppointments']);
    });

      
  }

}
