import { URLSearchParams, RequestOptions, Http, Headers, Response } from '@angular/http';
import { Breeding } from './model/breeding.model';
import { Injectable } from '@angular/core';
import {CommonConstants} from '../common/common.constants';

@Injectable()
export class BreedingService {

    public serviceURL =  CommonConstants.BASE_SERVICE_URL + "/breeding";

    constructor(public http:Http){}

    //TODO adjust this part to apply to the new structure
    /*
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
          let : Hello = response.json();
          this.result = hello.content;
        }
        error => {
          this.result = error;
        }
      });
}
    */
}