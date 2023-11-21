import { Component } from '@angular/core';
import { CryptageService } from '../../services/cryptage.service';

@Component({
  selector: 'app-decryptage',
  templateUrl: './decryptage.component.html',
  styleUrls: ['./decryptage.component.scss']
})
export class DecryptageComponent {
  crypte_key: string = '';
  response: string = '';

  copySuccessMessage = ''

  constructor(private cryptageService: CryptageService) {}

  process() {
    this.response = this.cryptageService.decrypt(this.crypte_key)
  }

  copyToClipboard() {
    const textarea = document.getElementById('response') as HTMLTextAreaElement;
    
    if (textarea) {
      textarea.select();
      document.execCommand('copy');
      this.copySuccessMessage = 'Texte copié dans le presse-papiers !';
      setTimeout(() => {
        this.copySuccessMessage = '';
      }, 3000);
    }
  }
}
