import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  resultsArmenia = false;
  resultsManizales = false;
  resultsPereira = false;

  constructor(private modalService: NgbModal) { }

  enviar(modal){
    this.modalService.open(modal,{ size: 'lg' });
  }

  ngOnInit() {
  }

  showResults(city){
    switch(city){
      case 'a':
      this.resultsArmenia = true;
      break;
      case 'm':
      this.resultsManizales = true;
      break;
      case 'p':
      this.resultsPereira = true;
      break;
    }
  }

}
