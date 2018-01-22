import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  fixed: any;
  offSetY: any;
  video: any;

  constructor() {
    this.scrollOffSet();
  }

  ngOnInit() {
    this.fixed = document.getElementsByClassName('headerBox');
    this.video = document.getElementsByClassName('video');
  }

  scrollOffSet(){
    window.addEventListener('scroll', (event) => {
      if (Math.floor(window.pageYOffset) > 325) {
        this.fixed[0].style.position = "fixed";
        this.fixed[0].style.top= "16%";
        this.fixed[0].style.backgroundColor = "rgba(0,0,0, 1)"
        this.video[0].style.display= "none";
      } else {
        this.fixed[0].style.position = "absolute";
        this.fixed[0].style.top="0";
        this.fixed[0].style.backgroundColor = "rgba(0,0,0, 0.7)"
        this.video[0].style.display= "block";
      }
    })
  }

}
