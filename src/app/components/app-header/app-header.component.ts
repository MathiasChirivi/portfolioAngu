import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent {
  isScrolled: boolean = false;
  menuOpen:boolean = false;

  @HostListener("window:scroll", [])
  handleScroll() {
    if (window.scrollY > 0) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }
  
}
