import { computed, Injectable, signal } from '@angular/core';
import foods from '../../data/foods';
import { Food } from '../models/Food';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  foods = signal(foods);
  text = signal('');
  filterArray = computed(() =>
    this.foods().filter((food) => food.name.includes(this.text()))
  );

  addFood(food:Food){
    this.foods.update(v=>[food].concat(v));
  }
}
