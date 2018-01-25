import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  fixed: any;
  triplit_fixed: any;
  offSetY: any;
  video: any;
  videoContainer: any;
  header_background: any;
  currentProject: string;

  constructor() {
    this.scrollOffSet();
  }
  
  ngOnInit() {
    this.currentProject = "ghostwriters";
    this.fixed = document.getElementsByClassName("ghostwriters");
    this.triplit_fixed = document.getElementsByClassName("triplit");
    this.video = document.getElementsByClassName("video");
    this.videoContainer = document.getElementsByClassName("video-container");
    this.header_background = document.getElementsByClassName(
      "header_background"
    );
  }

  moveScreen() {
      window.scrollTo(0, 325);
  }

  moveScreen_triplit() {
    window.scrollTo(0, 1327);
}

  scrollOffSet() {
    window.addEventListener("scroll", event => {
      console.log(window.pageYOffset);
      if (Math.floor(window.pageYOffset) > 325) {
        this.fixed[0].style.position = "fixed";
        this.fixed[0].style.top = "125px";
        this.fixed[0].style.backgroundColor = "rgba(0,0,0, 1)";

        this.video[0].style.display = "none";
        this.videoContainer[0].style.display = "none";
      } else {
        this.fixed[0].style.position = "absolute";
        this.fixed[0].style.top = "0";
        this.fixed[0].style.backgroundColor = "rgba(0,0,0, 0.7)";
        
        this.video[0].style.display = "block";
        this.videoContainer[0].style.display = "block";
      }
      if (Math.floor(window.pageYOffset) > 1327) {
        this.currentProject = "triplit"
        this.header_background[0].style.marginTop = "227px";
        this.triplit_fixed[0].style.position = "fixed";
        this.triplit_fixed[0].style.top = "-5px";
        this.triplit_fixed[0].style.backgroundColor = "rgba(0,0,0, 1)";
      } else {
        this.currentProject = "ghostwriters"
        this.header_background[0].style.marginTop = "0px";
        this.triplit_fixed[0].style.position = "relative";
        this.triplit_fixed[0].style.backgroundColor = "rgba(0,0,0, 1)";
      }
    });
  }
}
