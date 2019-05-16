import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { slideInDown } from 'ng-animate';

@Component({
  selector: 'about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
  animations: [
    trigger('slideInDown', [transition('* => *', useAnimation(slideInDown))])
  ],
})
export class AboutUsComponent implements OnInit {

  slideInDown: any;

  constructor() { }

  ngOnInit() {
  }

}
