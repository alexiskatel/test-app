import { Component, Input } from '@angular/core';
import { IconDefinition, faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() text = ''
  @Input() active = false
  @Input() icon!: IconDefinition
}
