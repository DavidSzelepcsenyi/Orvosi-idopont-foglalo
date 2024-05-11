import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pageTitle'
})
export class PipePipe implements PipeTransform {

  transform(route: string): string {
    
    switch (route) {
      case '/DoctorsSchedule':
        return 'Doctor Schedule';
      case '/Login':
        return 'Login';
      case '/Register':
        return 'Register';
      case '/Appointments':
        return 'Appointments';
      case '/MyAppointments':
        return 'My Appointments';
      case '/AddSchedule':
        return 'Schedule';
      case '/AddDocInf':
        return 'Add Doctor Information';
      default:
        return 'Make an Appointment'; 
    }
  }

}
