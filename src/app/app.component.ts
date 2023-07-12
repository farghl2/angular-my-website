import { Component, HostListener,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-website';
   showHeader =true;

  @HostListener('window:scroll', ['$event'])
  onSectionScroll(event: any) {
    const section = document.getElementById('home');
    if (section && section.getBoundingClientRect().bottom <= 0) {
      this.showHeader = false


    } else {
      this.showHeader =true;
    }
  }
}
