import { Component } from '@angular/core';
import { weatherData } from 'src/data';

interface Weather{
  city: string;
  temperature: number;
  description: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = '412ps5';
  messages!:Weather[];
  onClick(){
    console.log("clicked");
    this.messages = weatherData;
  }
}
JSON.stringify(weatherData);