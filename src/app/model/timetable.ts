import { Time } from "@angular/common"
import { Timestamp } from "@angular/fire/firestore"

export class Timetable {
    public id: string
    public monStart: Time
    public monEnd: Time
    public tuesStart: Time
    public tuesEnd: Time
    public wedStart: Time
    public wedEnd: Time
    public thurStart: Time
    public thurEnd: Time
    public friStart: Time
    public friEnd: Time

  
    constructor(
        id: string, 
        monStart: Time,
        monEnd: Time,
        tuesStart: Time,
        tuesEnd: Time,
        wedStart: Time,
        wedEnd: Time,
        thurStart: Time,
        thurEnd: Time,
        friStart: Time,
        friEnd: Time,
    ) {
  
      this.id = id
      this.monStart = monStart
      this.monEnd = monEnd
      this.tuesStart = tuesStart
      this.tuesEnd = tuesEnd
      this.wedStart = wedStart
      this.wedEnd = wedEnd
      this.thurStart = thurStart
      this.thurEnd = thurEnd
      this.friStart = friStart
      this.friEnd = friEnd
    }

    toJSON(): any {
      return{
      id: this.id,
      monStart: this.monStart,
      monEnd: this.monEnd,
      tuesStart: this.tuesStart,
      tuesEnd: this.tuesEnd,
      wedStart: this.wedStart,
      wedEnd: this.wedEnd,
      thurStart: this.thurStart,
      thurEnd: this.thurEnd,
      friStart: this.friStart,
      friEnd: this.friEnd,
      }
    }
}
