import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Food } from '../../../shared/models/Food';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
 @Input() foodForm!:FormGroup;
 @Output() sentForm=new EventEmitter<Food>();

 submit(){
  const food:Food={
    name:this.foodForm.controls["name"].value,
    calories:this.foodForm.controls["calories"].value,
    image:this.foodForm.controls["image"].value,
    quantity:this.foodForm.controls["quantity"].value,
  }
  this.sentForm.emit(food);
 }
}
