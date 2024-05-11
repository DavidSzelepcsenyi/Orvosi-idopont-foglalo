import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AngularFirestore } from "@angular/fire/compat/firestore"
import { Doctor } from '../model/doctor';
import { DocInfService } from '../services/doc-inf.service';
import { TimetableService } from '../services/timetable.service';
import { Timetable } from '../model/timetable';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-doctors-schedule',
  templateUrl: './doctors-schedule.component.html',
  styleUrl: './doctors-schedule.component.css'
})
export class DoctorsScheduleComponent implements OnInit{

  timetables: Timetable [] = [];
  doctors: Doctor [] = [];

  constructor( 
    private docInfService: DocInfService, 
    private router: Router, 
    private firestore: AngularFirestore, 
    private authService: AuthService, 
    private TimetableService : TimetableService,
    private UserService : UserService,
  ) { }

  ngOnInit() {
    this.docInfService.findAll().subscribe(doctors =>{
      this.doctors = doctors
    }) 
    this.TimetableService.findAll().subscribe(timetables => {
      this.timetables = timetables;
    });

  }

}
