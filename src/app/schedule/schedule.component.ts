import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TimetableService } from '../services/timetable.service';
import { AngularFirestore } from "@angular/fire/compat/firestore"
import { Timetable } from '../model/timetable';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css'
})
export class ScheduleComponent {

  scheduleFormGroup = new FormGroup({
    monStart: new FormControl(),
    monEnd: new FormControl(),
    tuesStart: new FormControl(),
    tuesEnd: new FormControl(),
    wedStart: new FormControl(),
    wedEnd: new FormControl(),
    thurStart: new FormControl(),
    thurEnd: new FormControl(),
    friStart: new FormControl(),
    friEnd: new FormControl(),
  });

  constructor( private timetableService: TimetableService, private router: Router, private firestore: AngularFirestore) { }

  onSubmit() {
    const tid = this.firestore.createId()
    const monStart = this.scheduleFormGroup.get("monStart")?.value;
    const monEnd = this.scheduleFormGroup.get("monEnd")?.value;
    const tuesStart = this.scheduleFormGroup.get("tuesStart")?.value;
    const tuesEnd = this.scheduleFormGroup.get("tuesEnd")?.value;
    const wedStart = this.scheduleFormGroup.get("wedStart")?.value;
    const wedEnd = this.scheduleFormGroup.get("wedEnd")?.value;
    const thurStart = this.scheduleFormGroup.get("thurStart")?.value;
    const thurEnd = this.scheduleFormGroup.get("thurEnd")?.value;
    const friStart = this.scheduleFormGroup.get("friStart")?.value;
    const friEnd = this.scheduleFormGroup.get("friEnd")?.value;

    const timetable = new Timetable(tid, monStart, monEnd, tuesStart, tuesEnd, wedStart, wedEnd, thurStart, thurEnd, friStart, friEnd);

    
      this.timetableService.create(timetable);
      this.router.navigate(['/DocInf']);
  }

}
