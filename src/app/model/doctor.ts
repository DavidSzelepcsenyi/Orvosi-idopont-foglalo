import { Timetable } from "./timetable"
import { User } from "./user"

export class Doctor {
    public id: string
    public user : User
    public firstName: string
    public lastName: string
    public room : string
    public timetable: Timetable
  
    constructor(
      id: string,
      user: User,
      firstName: string,
      lastName: string,
      room : string,
      timetable : Timetable
    ) {
  
      this.id = id
      this.user = user
      this.firstName = firstName
      this.lastName = lastName
      this.room = room
      this.timetable = timetable
    }

    toJSON(): any {
      return{
        id: this.id,
        user: this.user,
        firstName: this.firstName,
        lastName: this.lastName,
        room: this.room,
        timetable: this.timetable
      }
    }

}
