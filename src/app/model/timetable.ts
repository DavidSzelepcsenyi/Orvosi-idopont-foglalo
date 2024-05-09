import { Timestamp } from "@angular/fire/firestore"

export class Timetable {
    public id: string
    public monStart: Timestamp
    public monEnd: Timestamp
    public tuesStart: Timestamp
    public tuesEnd: Timestamp
    public wedStart: Timestamp
    public wedEnd: Timestamp
    public thurStart: Timestamp
    public thurEnd: Timestamp
    public friStart: Timestamp
    public friEnd: Timestamp

  
    constructor(
        id: string, 
        monStart: Timestamp,
        monEnd: Timestamp,
        tuesStart: Timestamp,
        tuesEnd: Timestamp,
        wedStart: Timestamp,
        wedEnd: Timestamp,
        thurStart: Timestamp,
        thurEnd: Timestamp,
        friStart: Timestamp,
        friEnd: Timestamp
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
      mondStart: this.monStart,
      monEnd: this.monEnd,
      tuesStart: this.tuesStart,
      tuesEnd: this.tuesEnd,
      webStart: this.wedStart,
      wedEnd: this.wedEnd,
      thusStart: this.thurStart,
      thusEnd: this.thurEnd,
      friStart: this.friStart,
      friEnd: this.friEnd,
      }
    }
}
