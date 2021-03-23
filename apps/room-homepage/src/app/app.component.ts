import { ResponsiveService } from './responsive.service';
import { Component } from '@angular/core';

@Component({
  selector: 'room-homepage-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'room-homepage';

  currentIndex = 1;

  isMenuActive = false;

  isMobile;

  device;

  constructor(private responsiveService: ResponsiveService) {
    this.device = this.responsiveService.checkWidth() === 'sm' ? 'mobile' : 'desktop';
    this.isMobile = this.device === 'mobile';
  }

  changeImage(value: string) {
    if (value === 'left') {
      if (this.currentIndex > 1) {
        this.currentIndex--;
      }
    }
    else if (value === 'right') {
      if (this.currentIndex < 3) {
        this.currentIndex++;
      }
    }
  }

  toogleMenu() {
    this.isMenuActive = !this.isMenuActive;
  }

}
