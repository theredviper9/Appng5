import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  goooaaals : any;

  constructor( private _data: DataService) { }

  ngOnInit() {
    this._data.goal.subscribe(res=>this.goooaaals = res);
  }
}
