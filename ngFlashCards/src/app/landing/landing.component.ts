import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  show: Boolean = true;

  toggleShow() {
    this.show = !this.show;
  }
}
