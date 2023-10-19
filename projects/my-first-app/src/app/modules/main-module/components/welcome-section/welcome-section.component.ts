import { Component } from '@angular/core';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-welcome-section',
  templateUrl: './welcome-section.component.html',
  styleUrls: ['./welcome-section.component.css']
})
export class WelcomeSectionComponent {
  faMessage = faMessage;
}
