import { Component, Input } from '@angular/core';

@Component({
  selector: 'room-homepage-arrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.scss']
})
export class ArrowComponent {

  @Input() type: 'left' | 'rigth';

}
