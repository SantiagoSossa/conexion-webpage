import { Component, OnInit, HostListener } from '@angular/core';
import { Inject} from "@angular/core";
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  innerWidth;
  isCollapsed = true;
  windowScrolled: boolean;
  
  constructor(@Inject(DOCUMENT) private document: Document) { }

  @HostListener("window:scroll", [])
    onWindowScroll() {
      if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
        this.innerWidth = document.documentElement.scrollTop;
        this.windowScrolled = true;
    } 
      else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
        this.innerWidth = document.documentElement.scrollTop;
        this.windowScrolled = false;
        }
    }
  @HostListener('scroll', ['$event']) 
    scrollHandler(event) {
      console.debug("Scroll Event");
    }
  ngOnInit() {
  }

}
