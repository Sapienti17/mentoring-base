import {Component} from '@angular/core'
import {RouterOutlet} from '@angular/router'
import {NgFor, NgIf, NgOptimizedImage} from "@angular/common";


const returnMenuItem: (item: string) => string = (item: string): string => {
  return item
}

const menuAboutCompany: string = returnMenuItem("О компании");

const newPages: number[] = [5, 4, 3, 2, 1]


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf, NgOptimizedImage, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title: string = 'mentoring-first-project'

  readonly mainTitle: string = 'Главная'
  readonly aboutCompany: string = menuAboutCompany
  readonly catalogTitle: string = 'Каталог'

  isShowCatalog: boolean = true;
  isShowImage: boolean = true;
  isUpperCase: boolean = true;

  menuItems: string[] = ['Каталог', 'Строительные материалы', 'Инструменты', 'Электрика', 'Интерьер и одежда']

  changeMenuText() {
    this.menuItems = this.menuItems.map((item: string) => this.isUpperCase ? item.toLowerCase() : item.toUpperCase())

    this.isUpperCase = !this.isUpperCase
  }

  newPages: number[] = newPages;


}
