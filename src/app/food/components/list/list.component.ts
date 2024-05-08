import { Component,EventEmitter,input,Input, Output, Signal } from '@angular/core';
import { Food } from '../../../shared/models/Food';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  // primera forma
  // @Input() foods!:Food[];
  // segunda forma
  // @Input() foods!:Signal<Food[]>;
  // tercera forma
  foods=input<Food[]>();
  @Output() sentFoodToMenu= new EventEmitter<Food>();

  addToMenu(food:Food){
    this.sentFoodToMenu.emit(food);
  }
}
