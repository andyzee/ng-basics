import { Component, Input, OnInit } from "@angular/core";
import { Card } from '../app.component'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card!: Card;
  @Input() index: number = 1;

  cardDate: Date = new Date();

  title = 'My card title';
  text = 'My sample text';

  textColor = '';

  ngOnInit(): void {
  }

  changeTitle() {
    this.title = 'Changed title';
  }

  inputHandler(input: string) {
    this.title = input;
  }

  changeHandler() {
    console.log(this.title)
  }
}
