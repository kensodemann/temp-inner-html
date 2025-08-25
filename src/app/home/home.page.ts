import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonListHeader,
} from '@ionic/angular/standalone';
import { SafeHtmlPipe } from './safe-html.pipe';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    imports: [
        IonListHeader,
        IonLabel,
        IonItem,
        IonList,
        IonListHeader,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        NgSwitch,
        NgSwitchCase,
        NgSwitchDefault,
        SafeHtmlPipe,
    ]
})
export class HomePage {
  endingHtml = '<h1>Done...</h1><p>And now my brain is fried. Oooops...</p>';
  startingHtml =
    '<h1>Thinking...</h1><p>This is taking my brain a while. Hang on...</p>';
  theHtml = '<h1>HTML</h1><p>This is some strange HTML</p>';
  theState = 0;

  constructor(public sanitizer: DomSanitizer) {
    setTimeout(() => {
      this.theState = 1;
    }, 5000);
  }
}
