import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CryptageService {

  decalage: number = 0;
  constructor() { }

  crypt(texte: string): string {
    texte = texte.trim(); 

    const alphabetMajuscules = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const alphabetMinuscules = alphabetMajuscules.toLowerCase();
    const decalageAvant = Math.floor(Math.random() * 9) + 1;
    const decalageApres = Math.floor(Math.random() * 9) + 1;
    this.decalage = decalageAvant + decalageApres;

    let response = decalageAvant.toString(); 

    for (let i = 0; i < texte.length; i++) {
      const char = texte[i];
      const isLettreMajuscule = /[A-Z]/.test(char);
      const isLettreMinuscule = /[a-z]/.test(char);

      if (isLettreMajuscule) {
        const indexLettre = alphabetMajuscules.indexOf(char);
        const nouvelIndex = (indexLettre + this.decalage) % 26;
        response += alphabetMajuscules[nouvelIndex];
      } else if (isLettreMinuscule) {
        const indexLettre = alphabetMinuscules.indexOf(char);
        const nouvelIndex = (indexLettre + this.decalage) % 26;
        response += alphabetMinuscules[nouvelIndex];
      } else if (char === ' ') {
        response += '_2%';
      } else {
        response += char;
      }
    }

    return response += decalageApres.toString();
    
  }

  decrypt(crypte_key: string) {
    const decalageAvant = Number(crypte_key[0]);
    const decalageApres = Number(crypte_key.slice(-1));
    this.decalage = decalageAvant + decalageApres;

    let texteDecrypte = '';

    for (let i = 1; i < crypte_key.length - 1; i++) {
      const char = crypte_key[i];

      if (char === '_' && crypte_key[i + 1] === '2' && crypte_key[i + 2] === '%') {
        texteDecrypte += ' ';
        i += 2
      }else {
        const isLettreMajuscule = /[A-Z]/.test(char);
        const isLettreMinuscule = /[a-z]/.test(char);

        if (isLettreMajuscule) {
          const indexLettre = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(char);
          const nouvelIndex = (indexLettre - this.decalage + 26) % 26;
          texteDecrypte += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[nouvelIndex];
        } else if (isLettreMinuscule) {
          const indexLettre = 'abcdefghijklmnopqrstuvwxyz'.indexOf(char);
          const nouvelIndex = (indexLettre - this.decalage + 26) % 26;
          texteDecrypte += 'abcdefghijklmnopqrstuvwxyz'[nouvelIndex];
        } else {
          texteDecrypte += char;
        }
      }
    }

    return texteDecrypte;
  }
}
