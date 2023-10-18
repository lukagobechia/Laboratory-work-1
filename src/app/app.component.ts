import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab4';
  user = [
    {
      id: 22100551,
      name: "Zara",
      email: "lukagobechiaa@gmail.comm"
    },
    {
      id: 22100559,
      name: "Tamari",
      email: "tamartamarashvili@gmail.com"
    },
    {
      id:22100598,
      name: "Henry",
      email: "henrynlsson@gmail.com"  
    },
    {
      id:22100593,
      name: "Sesil",
      email: "sesilhann@gmail.com"  
    }
  ]
}
