import { Component, computed, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Drink } from "./drink.enum";

const EMPTY_WATER_URL = 'https://cdn-icons-png.flaticon.com/512/3100/3100553.png';
const FILLED_WATER_URL = 'https://cdn-icons-png.flaticon.com/512/3100/3100566.png';
const EMPTY_COFFEE_URL = 'https://cdn-icons-png.flaticon.com/512/924/924412.png';
const FILLED_COFFEE_URL = 'https://cdn-icons-png.flaticon.com/512/924/924514.png';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 indexes: number[] = [0, 1, 2, 3, 4];
 emptyImageUrl: string = EMPTY_WATER_URL;
 filledImageUrl: string = FILLED_WATER_URL;
 quantity: WritableSignal<number> = signal(2);
}
