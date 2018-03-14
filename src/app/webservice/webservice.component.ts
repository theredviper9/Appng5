import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-webservice',
  templateUrl: './webservice.component.html',
  styleUrls: ['./webservice.component.scss']
})
export class WebserviceComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

}
