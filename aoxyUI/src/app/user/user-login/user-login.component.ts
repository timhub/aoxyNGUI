import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../../animations/fade-in';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
  animations: [fadeIn]
})
export class UserLoginComponent implements OnInit {

  public userName : String;
  public error : Error;

  constructor() { 
  }

  ngOnInit() {
  }


}
