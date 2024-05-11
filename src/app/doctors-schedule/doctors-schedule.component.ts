import { Component, OnInit } from '@angular/core';
import { Doctor } from '../model/doctor';
import { DocInfService } from '../services/doc-inf.service';
import { TimetableService } from '../services/timetable.service';
import { Timetable } from '../model/timetable';


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
    private TimetableService : TimetableService,

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
