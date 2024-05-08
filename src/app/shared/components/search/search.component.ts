import { Component, inject } from '@angular/core';
import { FoodService } from '../../services/food.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  private foodService=inject(FoodService);

  text=this.foodService.text;

  // primera forma
  // search(event:KeyboardEvent){
  //   const inputElement=event.target as HTMLInputElement;
  //   this.text.update(v=>
  //     inputElement.value
  //   )
  // }
}
