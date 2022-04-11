import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  title = 'My card title';
  text = 'My sample text';

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
