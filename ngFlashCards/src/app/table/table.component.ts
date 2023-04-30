import { Component, OnInit } from '@angular/core';
import { FlashcardApiService } from '../flashcard-api.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  cards: any = {};
  id: number = 0;
  frontb: string = "";
  backb: string = "";
  form: Boolean = true;
  displayedColumns: string[] = ['id', 'front', 'back'];
  constructor(private api: FlashcardApiService) { }

  // ida: number = 0;
  // fronta: string = "";
  // backa: string = "";
  // carda: any = {};

  ngOnInit(): void {
    this.api.getAllFlashcards().subscribe(data => {
      // console.log(data);
      this.cards = data;
      this.id = this.cards.Id;
      // console.log(this.cards.id)
      // this.id = this.cards.Id;
    });
  }

  deleteCard(i: string | number) {
    // console.log(this.cards[i])
    // console.log(this.cards[i].id)
    this.api.deleteFlashCard(this.cards[i].id).subscribe(data => console.log(data));
  }
  // updateCard(i: string | number) {
  //   // console.log(this.cards[i])
  //   // console.log(this.cards[i].id)
  //   // this.api.deleteFlashCard(this.cards[i].id).subscribe(data => console.log(data));
  // }
  toggleForm(i: number) {
    this.form = !this.form;
    this.id = i;
    // console.log(this.cards[i])
  }
  // logThis() {
  //   console.log(this.cards[this.id]);
  // }
  onKey(event: any, field: string) {
    const inputValue = event.target.value;
    if (field === 'frontb') {
      this.frontb = inputValue;
      // console.log(this.frontb);
    } else if (field === 'backb') {
      this.backb = inputValue;
    }
  }

  saveProfile(event: Event) {
    this.cards[this.id].front = this.frontb;
    this.cards[this.id].back = this.backb;
    this.api.updateFlashCard(this.cards[this.id]).subscribe(data => console.log(data));
    this.form = !this.form;
  }
  closeForm() {
    this.form = !this.form;
  }
}
