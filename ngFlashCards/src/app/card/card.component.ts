import { Component, OnInit } from '@angular/core';
import { FlashcardApiService } from '../flashcard-api.service';

export interface FlashCard {
  id: number;
  front: string;
  back: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  cards: any = {};
  // transfer: any[] = [];
  // display: string[] = [];
  id: number = -1;
  constructor(private api: FlashcardApiService) { }
  side: Boolean = true;

  ngOnInit(): void {
    this.api.getAllFlashcards().subscribe(data => {
      // console.log(data);
      // let disp = [];
      this.cards = data;
      // this.display = this.cards[4].front;
      // console.log(this.display);
      // this.transfer = this.cards;
      // console.log(this.transfer);
      // this.transfer.forEach((item) => {
      //   disp.push(item);
      // });
      // this.display = disp;
      // console.log(this.display);
    });
  }

  toggleSide(i: number) {
    this.side = !this.side;
    this.id = i;
    // console.log(this.id)
  }


}
