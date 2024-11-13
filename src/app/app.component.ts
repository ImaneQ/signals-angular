import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
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

  Drink = Drink;
  indexes: number[] = [0, 1, 2, 3, 4];
  emptyImageUrl: Signal<string> = computed(() => this.type() === Drink.Water ? EMPTY_WATER_URL : EMPTY_COFFEE_URL);
  filledImageUrl: Signal<string> = computed(() => this.type() === Drink.Water ? FILLED_WATER_URL : FILLED_COFFEE_URL);

  message: Signal<string> = computed(() => `J'ai bu ${this.quantity()} ${this.type() === Drink.Water ? 'verre(s) d\'eau' : 'tasse(s) de café'}`
  );

  quantity: WritableSignal<number> = signal(3);
  type: WritableSignal<Drink> = signal(Drink.Water)

  decrement(): void {
    this.quantity.update(quantity => quantity ? quantity - 1 : 0);
  }

  increment(): void {
    this.quantity.update(quantity => quantity < this.indexes.length ? quantity + 1 : this.indexes.length);
  }

  constructor() {
    // Utilisation de effect() pour réagir aux changements de quantity()
    effect(() => {
      const quantityValue = this.quantity();
      if (quantityValue === this.indexes.length) {
        alert(`Vous avez atteint le nombre maximum de ${this.indexes.length} verres consommés !`);
      }
      console.log("Nombre de verres remplis :", quantityValue);
    });
  }
}
