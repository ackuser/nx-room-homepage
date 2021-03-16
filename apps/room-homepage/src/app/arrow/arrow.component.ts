import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'room-homepage-arrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.scss']
})
export class ArrowComponent {

  @Input() type: 'left' | 'rigth';

  @Output() OnClickEvent = new EventEmitter<string>();
  
  @HostListener('click', ['$event.target'])
  onClick() {
    this.OnClickEvent.emit(this.type);
  }
}

