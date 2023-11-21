import { Component } from '@angular/core';
import { CryptageService } from '../../services/cryptage.service';

@Component({
  selector: 'app-cryptage',
  templateUrl: './cryptage.component.html',
  styleUrls: ['./cryptage.component.scss']
})
export class CryptageComponent {
  origial: string = '';
  response: string = '';

  copySuccessMessage = ''

  constructor(private cryptageService: CryptageService) {}

  process() {
    this.response = this.cryptageService.crypt(this.origial)
  }

  copyToClipboard() {
    const textarea = document.getElementById('response') as HTMLTextAreaElement;
    
    if (textarea) {
      textarea.select();
      document.execCommand('copy');
      this.copySuccessMessage = 'Clé copiée dans le presse-papiers !';
      setTimeout(() => {
        this.copySuccessMessage = '';
      }, 3000);
    }
  }
}
