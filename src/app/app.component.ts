import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employees Table!';

  employees=[
    {
      name: 'naveen',
      contact:'734834839',
      address:'bangalore, india'
    },
    {
      name: 'Praveen',
      contact:'738348345',
      address:'Chennai, india'
    },
    {
      name: 'Mithun',
      contact:'7884545949',
      address:'Hyderabad, india'
    }

  ]
}
