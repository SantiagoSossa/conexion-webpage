import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounce } from 'ng-animate';

@Component({
  selector: 'experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css'],
  animations: [
    trigger('bounce', [transition('* => *', useAnimation(bounce))])
  ],
})
export class ExperiencesComponent implements OnInit {

  showAll = true;
  show1 = false;
  show2 = false;
  show3 = false;
  bounce: any;

  constructor() { }

  filterBy(filter){
    this.resetButtons();
    switch(filter){
      case 'all':
      this.showAll = true;
      break;
      case '1':
      this.show1 = true;
      break;
      case '2':
      this.show2 = true;
      break;
      case '3':
      this.show3 = true;
      break;
    }
  }

  resetButtons(){
  this.showAll = false;
  this.show1 = false;
  this.show2 = false;
  this.show3 = false;
  }

  ngOnInit() {
  }

}
