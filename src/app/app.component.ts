import { Component } from '@angular/core';

export interface Card {
  title: string
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-basics';
  toggle = true;

  cards: Card[] = [
    { title: 'Card 1', text: 'this is card 1' },
    { title: 'Card 2', text: 'this is card 2' },
    { title: 'Card 3', text: 'this is the last card' }
  ]

  toggleCards() {
    this.toggle = !this.toggle
  }
}
