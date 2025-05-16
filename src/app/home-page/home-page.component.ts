import {Component} from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";

const newPages: number[] = [5, 4, 3, 2, 1]


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    NgOptimizedImage
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  isShowImage: boolean = true;
  newPages: number[] = newPages;

}
