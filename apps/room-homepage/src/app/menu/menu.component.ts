import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'room-homepage-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  @Output() OnClickEvent = new EventEmitter();

  onClick() {
    this.OnClickEvent.emit();
  }
}
