import { Component, computed, signal } from '@angular/core';
import {
  PRIVACY_TRANSLATIONS,
  PrivacyLanguage
} from './privacy.translations';

@Component({
  selector: 'app-privacy',
  imports: [],
  templateUrl: './privacy.html',
  styleUrl: './privacy.scss'
})
export class Privacy {
  protected readonly language = signal<PrivacyLanguage>('en');

  protected readonly translation = computed(
    () => PRIVACY_TRANSLATIONS[this.language()]
  );

  protected setLanguage(language: PrivacyLanguage): void {
    this.language.set(language);
  }
}