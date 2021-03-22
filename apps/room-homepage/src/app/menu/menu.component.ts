import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'room-homepage-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  @Input() isMobile = false;

  @Output() OnClickEvent = new EventEmitter();

  onClick() {
    this.OnClickEvent.emit();
  }
}
