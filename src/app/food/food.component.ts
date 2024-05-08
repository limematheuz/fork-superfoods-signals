import { Component, inject, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FoodService } from '../shared/services/food.service';
import { ListComponent } from './components/list/list.component';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { Food } from '../shared/models/Food';
import { FormComponent } from "./components/form/form.component";

@Component({
    selector: 'app-food',
    standalone: true,
    templateUrl: './food.component.html',
    styleUrl: './food.component.scss',
    imports: [JsonPipe, ListComponent, FormComponent]
})
export class FoodComponent implements OnInit{
  private foodService = inject(FoodService);
  private formBuilder = inject(FormBuilder);

  foods = this.foodService.filterArray;
  foodForm!: FormGroup;

  newFood: Food = { name: '', calories: 0, image: '', quantity: 1 };

  ngOnInit(): void {
    this.foodForm=this.formBuilder.group(this.newFood);
  }

  onFoodMenu(food:Food){
    
  }

  onSubmit(food:Food){
    this.foodService.addFood(food)
  }


}
