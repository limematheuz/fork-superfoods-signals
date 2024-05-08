import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FoodComponent } from "./food/food.component";
import { SearchComponent } from "./shared/components/search/search.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, FoodComponent, SearchComponent]
})
export class AppComponent {
  title = 'superfoods';
}
