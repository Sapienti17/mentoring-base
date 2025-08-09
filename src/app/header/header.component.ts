import { Component } from '@angular/core';
import { DatePipe, NgForOf, NgIf, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';


const returnMenuItem: (item: string) => string = (item: string): string => {
  return item
}

const menuAboutCompany: string = returnMenuItem('О компании');

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    NgOptimizedImage,
    RouterLink,
    DatePipe,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

  readonly mainTitle: string = 'Главная'
  readonly aboutCompany: string = menuAboutCompany
  readonly catalogTitle: string = 'Каталог'

  isShowCatalog: boolean = true;
  isUpperCase: boolean = true;

  menuItems: string[] = ['Каталог', 'Строительные материалы', 'Инструменты', 'Электрика', 'Интерьер и одежда']

  date: string = new Date().toLocaleString()

  changeMenuText() {
    this.menuItems = this.menuItems.map((item: string) => this.isUpperCase ? item.toLowerCase() : item.toUpperCase())

    this.isUpperCase = !this.isUpperCase
  }
}
