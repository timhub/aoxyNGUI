import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';
import { BaseRequestOptions, Http, Headers, Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

@Injectable()
export class AppComponent {
  title = 'app works!';
  name = "";
  result = "result";

  public serviceURL = "http://localhost:8080/services/hello"
  console: Console;

  constructor(public http:Http){}

  public click() {
     return this.http.get(this.serviceURL)
      .map((response : Response) => {
        this.result = response.text();
        return response;
      })
      .subscribe((response : Response) => 
         this.result = response.text());

  }
}
