import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-whether',
  templateUrl: './whether.component.html',
  styleUrls: ['./whether.component.scss']
})
export class WhetherComponent implements OnInit {

  city :String = "";
  humid : Number ;
  pres : Number; 
  temp : Number;

  constructor(private http: Http) { }

  ngOnInit() {
  }

  search(){
    this.http.get('http://api.openweathermap.org/data/2.5/weather?APPID=0ba5e82df49a15a79cec569618c56215&q=' + this.city)
    .subscribe(
      (res: Response)=>{
        const weatherCity = res.json();
        console.log(weatherCity);
        this.humid = weatherCity.main.humidity;
        this.pres = weatherCity.main.pressure; 
        this.temp = weatherCity.main.temp;
      }
    )
  }

}
