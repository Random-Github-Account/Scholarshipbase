import { Component } from '@angular/core';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent {
  applications: any[] = [
    {
      no: 1,
      firstName: 'Nello',
      lastName: 'De Guzman',
      email: 'nellorethDG@gmail.com',
      phone: 'xxxxxxxxxxx',
      address: 'Makati, Manila',
      scholarship: 'Athletic Scholarship'
    },
    {
      no: 2,
      firstName: 'Ian Kenneth',
      lastName: 'Mata',
      email: 'KianMata@gmail.com',
      phone: 'xxxxxxxxxxx',
      address: 'Quezon, Nueva Ecija',
      scholarship: 'Academic Scholarship'
    },
    {
      no: 3,
      firstName: 'John Matthew',
      lastName: 'Buenconsejo',
      email: 'JMbuen@gmail.com',
      phone: 'xxxxxxxxxxx',
      address: 'Cabantuan, Nueva Ecija',
      scholarship: 'Academic Scholarship'
    },
  ];

  
  deleteApplication(index: number): void {
    if (index >= 0 && index < this.applications.length) {
      this.applications.splice(index, 1);
    }
  }
}
