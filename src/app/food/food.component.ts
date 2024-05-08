import { Component,inject } from '@angular/core';
import{JsonPipe} from "@angular/common";
import { FoodService } from '../shared/services/food.service';
import { ListComponent } from "./components/list/list.component";

@Component({
    selector: 'app-food',
    standalone: true,
    templateUrl: './food.component.html',
    styleUrl: './food.component.scss',
    imports: [JsonPipe, ListComponent]
})
export class FoodComponent {
  private foodService=inject(FoodService);

  foods=this.foodService.filterArray;
}
