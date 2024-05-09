import { Doctor } from "./doctor"
import { Timetable } from "./timetable"
import { User } from "./user"

export class Appointment {
    public id: string
    public doctor : Doctor
    public patient : User
    public start : Timetable
    public end : Timetable

  
    constructor(
        id: string, 
        doctor : Doctor,
        patient : User,
        start : Timetable,
        end : Timetable
    ) {
  
      this.id = id
      this.patient = patient
      this.doctor = doctor
      this.start = start
      this.end = end
    }

    toJSON(): any {
      return{
        id: this.id,
        doctor: this.doctor,
        patient: this.patient,
        start: this.start,
        end: this.end
      }
    }
}
