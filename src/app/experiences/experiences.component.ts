import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {

  showAll = true;
  show1 = false;
  show2 = false;
  show3 = false;
  show4 = false;
  show5 = false;
  show6 = false;
  show7 = false;
  show8 = false;
  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    autoplay: true,
    margin: 10,
    autoWidth: true,
    dots: false,
    nav: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    }
  }

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
      case '4':
      this.show4 = true;
      break;
      case '5':
      this.show5 = true;
      break;
      case '6':
      this.show6 = true;
      break;
      case '7':
      this.show7 = true;
      break;
      case '8':
      this.show8 = true;
      break;
    }
  }

  resetButtons(){
  this.showAll = false;
  this.show1 = false;
  this.show2 = false;
  this.show3 = false;
  this.show4 = false;
  this.show5 = false;
  this.show6 = false;
  this.show7 = false;
  this.show8 = false;
  }

  ngOnInit() {
  }

}
