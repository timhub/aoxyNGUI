import { Component, OnInit } from '@angular/core';
import {Breeding} from './model/breeding.model';

@Component({
  selector: 'app-breeding',
  templateUrl: './breeding.component.html',
  styleUrls: ['./breeding.component.css']
})
export class BreedingComponent implements OnInit {

  public breedingItem: Breeding = new Breeding();

  constructor() { 
  }

  ngOnInit() {
  }

}
