import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';
import { BaseRequestOptions, Http, Headers, Response } from '@angular/http';
import { Hello } from './Hello-model';
import { RequestOptions } from "../../node_modules/._@angular_http@2.4.10@@angular/http/src";

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
     let param = '';
     let option = new RequestOptions({
     });
     return this.http.get(this.serviceURL, option)
      .map((response : Response) => {
        return response;
      })
      .subscribe((response : Response) => {
        let hello: Hello = response.json();
        this.result = hello.content;
      });
  }
}
