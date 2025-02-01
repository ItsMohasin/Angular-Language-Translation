import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private languageSubject = new Subject<string>();
  language$ = this.languageSubject.asObservable();

  setLanguage(language: string) {
    // You can add additional logic here to switch the language using your translation service.
    // For example, if you're using ngx-translate, you would call this.translateService.use(language);
    this.languageSubject.next(language);
  }
}