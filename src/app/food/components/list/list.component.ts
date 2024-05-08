import { Component,input,Input, Signal } from '@angular/core';
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


}
