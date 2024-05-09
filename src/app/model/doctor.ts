import { Timetable } from "./timetable"
import { User } from "./user"

export class Doctor {
    public id: string
    public user : User
    public room : string
    public timetable: Timetable
  
    constructor(
      id: string,
      user: User,
      room : string,
      timetable : Timetable
    ) {
  
      this.id = id
      this.user = user
      this.room = room
      this.timetable = timetable
    }

    toJSON(): any {
      return{
        id: this.id,
        user: this.user,
        room: this.room,
        timetable: this.timetable
      }
    }
}
