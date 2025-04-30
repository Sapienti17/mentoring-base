import {Component} from '@angular/core'
import {RouterOutlet} from '@angular/router'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'mentoring-first-project'

  readonly mainTitle: string = 'Главная'
  readonly aboutTitle: string = 'О компании'
  readonly catalogTitle: string = 'Каталог'

  readonly subTitleListItem1: string = 'Каталог'
  readonly subTitleListItem2: string = 'Строительные материалы'
  readonly subTitleListItem3: string = 'Инструменты'
  readonly subTitleListItem4: string = 'Электрика'
  readonly subTitleListItem5: string = 'Интерьер и одежда'

}
