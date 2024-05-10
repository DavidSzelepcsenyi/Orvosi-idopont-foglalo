import { Doctor } from "./doctor"
import { Timetable } from "./timetable"
import { User } from "./user"
import { Time } from "@angular/common"

export class Appointment {
    public id: string
    public doctor : Doctor
    public doctorFirstName : string
    public doctorLastname : string
    public patient : User
    public patientFirstName : string
    public patientLastName : string
    public start : Time
    public end : Time
    public room: number

  
    constructor(
        id: string, 
        doctor : Doctor,
        doctorFirstName : string,
        doctorLastname : string,
        patient : User,
        patientFirstName : string,
        patientLastName : string,
        start : Time,
        end : Time,
        room: number,
    ) {
  
      this.id = id
      this.doctor = doctor
      this.doctorFirstName = doctorFirstName
      this.doctorLastname = doctorLastname
      this.patient = patient
      this.patientFirstName = patientFirstName
      this.patientLastName = patientLastName
      this.start = start
      this.end = end
      this.room = room
    }

    toJSON(): any {
      return{
        id: this.id,
        doctor: this.doctor,
        doctorFirstName: this.doctorFirstName,
        doctorLastname: this.doctorLastname,
        patient: this.patient,
        patientFirstName: this.patientFirstName,
        patientLastName: this.patientLastName,
        start: this.start,
        end: this.end,
        room: this.room
      }
    }
    
    
}
