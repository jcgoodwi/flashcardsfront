import { Component } from '@angular/core';
import { FlashcardApiService } from '../flashcard-api.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  constructor(private api: FlashcardApiService) { }

  ida: number = 0;
  fronta: string = "";
  backa: string = "";
  carda: any = {};

  show: Boolean = true;
  form: Boolean = true;
  side: Boolean = true;

  toggleShow() {
    this.show = !this.show;
  }

  toggleForm() {
    this.form = !this.form;
  }

  onKey(event: any, field: string) {
    const inputValue = event.target.value;
    if (field === 'fronta') {
      this.fronta = inputValue;
      // console.log(this.fronta);
    } else if (field === 'backa') {
      this.backa = inputValue;
    }
  }

  saveProfile(event: Event) {
    this.carda.id = this.ida;
    this.carda.front = this.fronta;
    this.carda.back = this.backa;
    this.api.createFlashCard(this.carda).subscribe(data => console.log(data));
    this.form = !this.form;
  }

}
