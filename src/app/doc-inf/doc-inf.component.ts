import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFirestore } from "@angular/fire/compat/firestore"
import { Doctor } from '../model/doctor';
import { DocInfService } from '../services/doc-inf.service';
import { getAuth } from "firebase/auth";
import { TimetableService } from '../services/timetable.service';
import { Timetable } from '../model/timetable';

@Component({
  selector: 'app-doc-inf',
  templateUrl: './doc-inf.component.html',
  styleUrl: './doc-inf.component.css'
})
export class DocInfComponent implements OnInit {

  currentUser: any;
  timetables: Timetable [] = [];

  docInfFormGroup = new FormGroup({
    roomNumber: new FormControl(),
    selectedTimetable: new FormControl()
  });

  constructor( private docInfService: DocInfService, private router: Router, private firestore: AngularFirestore, private authService: AuthService, private TimetableService : TimetableService) { }


  ngOnInit() {
    this.authService.user$.subscribe(user => {
      this.currentUser = user;
      this.TimetableService.findAll().subscribe(timetables => {
        this.timetables = timetables;
      });
    });
  }


  onSubmit() {
    const did = this.firestore.createId()
    const roomNumber = this.docInfFormGroup.get("roomNumber")?.value;
    const selectedTimetable = this.docInfFormGroup.get("selectedTimetable")?.value;

    const doctor = new Doctor(did, this.currentUser.uid, roomNumber, selectedTimetable);

    
      this.docInfService.create(doctor);
      this.router.navigate(['/DocInf']);
  }

}
