export class User {
    public id: string
    public email: string
    public firstName: string
    public lastName: string
    public username: string
    public isDoctor: boolean

    constructor(
      id: string, 
      email: string, 
      firstName: string,
      lastName: string, 
      username: string,
      isDoctor: boolean
    ) {
  
      this.id = id
      this.email = email
      this.firstName = firstName
      this.lastName = lastName
      this.username = username
      this.isDoctor = isDoctor
    }

    toJSON(): any {
      return{
        id: this.id,
        email: this.email,
        firstName: this.firstName,
        lastName: this.lastName,
        username: this.username,
        isDoctor: this.isDoctor
      }
    }

  }