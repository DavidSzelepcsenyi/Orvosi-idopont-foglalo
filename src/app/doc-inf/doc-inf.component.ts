import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormControl, FormGroup, Validator } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFirestore } from "@angular/fire/compat/firestore"
import { Doctor } from '../model/doctor';
import { DocInfService } from '../services/doc-inf.service';
import { TimetableService } from '../services/timetable.service';
import { Timetable } from '../model/timetable';
import { UserService } from '../services/user.service';



@Component({
  selector: 'app-doc-inf',
  templateUrl: './doc-inf.component.html',
  styleUrl: './doc-inf.component.css'
})
export class DocInfComponent implements OnInit {

  currentUser: any;
  timetables: Timetable [] = [];
  doctors: Doctor [] = [];
  firstName: any = "";
  lastName: any ="";



  docInfFormGroup = new FormGroup({
    roomNumber: new FormControl(),
    selectedTimetable: new FormControl()
  });

  constructor( 
    private docInfService: DocInfService, 
    private router: Router, 
    private firestore: AngularFirestore, 
    private authService: AuthService, 
    private TimetableService : TimetableService,
    private UserService : UserService,
  ) { }


  ngOnInit() {
    this.authService.user$.subscribe(user => {
      this.currentUser = user;
      this.TimetableService.findAll().subscribe(timetables => {
        this.timetables = timetables;
      });
      this.UserService.findUserByID(this.currentUser.uid).subscribe(users => {
        const user = users[0]
        this.firstName = user?.firstName;
        this.lastName = user?.lastName;
      });
      this.docInfService.findAll().subscribe(doctors =>{
        this.doctors = doctors
      })
    });


  }
  onSubmit() {
    const roomNumber = this.docInfFormGroup.get("roomNumber")?.value;
    const selectedTimetable = this.docInfFormGroup.get("selectedTimetable")?.value;
    var updating = false;
    for(const doc of this.doctors){
      if(doc.user == this.currentUser.uid){
          this.docInfService.update(doc, selectedTimetable, roomNumber)
          updating = true;
      }
    }
    if(!updating){
      const did = this.firestore.createId()
      const doctor = new Doctor(did, this.currentUser.uid,this.firstName,this.lastName, roomNumber, selectedTimetable);
      this.docInfService.create(doctor);
    }
    this.router.navigate(['/Appointments']);
  }
}
