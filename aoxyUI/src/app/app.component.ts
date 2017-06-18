import { Injectable,Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';
import { URLSearchParams, RequestOptions, Http, Headers, Response } from '@angular/http';
import { Hello } from './Hello-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

@Injectable()
export class AppComponent {
  title = 'Hello Rest Test';
  name:string = "";
  result = "";

  public serviceURL = "http://localhost:8080/services/hello"
  console: Console;

  constructor(public http:Http){}

  public click() {
     let param : URLSearchParams = new URLSearchParams();
     param.append('str', this.name);
     let options : RequestOptions = new RequestOptions({
        search : param,
     });
     return this.http.get(this.serviceURL, options)
      .map((response : Response) => {
        response.headers.append('Access-Control-Allow-Origin', '*');
        return response;
      })
      .subscribe((response : Response) => {
        data => {
          let hello: Hello = response.json();
          this.result = hello.content;
        }
        error => {
          this.result = error;
        }
      });
  }
}
