import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';

import { DateIdea } from './entities/dateIdea';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'valentineDate';

  dateIdea: DateIdea = {
    place: 'Sushi House',
    description: 'Vamos a comer un delicioso sushi.',
    date: '9:00pm',
    where: 'https://maps.app.goo.gl/fRYX9UaxFHba2iVa7',
  };

  sheSaidYes: boolean = false;
  sheSaidNo: boolean = false;

  selectedYes() {
    this.sheSaidYes = true;
  }

  selectedNo() {
    this.sheSaidNo = true;
  }

  changeButtonPosition() {
    const button = document.getElementById('btn')!;
    button.style.left = `${Math.ceil(Math.random() * 90)}%`;
    button.style.top = `${Math.ceil(Math.random() * 90)}%`;
  }
}
