import { Component, inject } from '@angular/core';
import { AsyncPipe, DatePipe, NgForOf, NgIf, NgOptimizedImage } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ButtonDirective } from '../Directives/button.directive';
import { AuthDialogComponent } from '../auth-dialog/auth-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../auth.service';


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
    ButtonDirective,
    AsyncPipe,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public readonly authService: AuthService = inject(AuthService)
  readonly authDialog: MatDialog = inject(MatDialog)
  private readonly router: Router = inject(Router)

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

  public showAuthDialog() {
    this.authDialog.open(AuthDialogComponent).afterClosed().subscribe((result: string) => {
      if (result === 'admin') {
        this.authService.loggedAsAdmin()
      } else if (result === 'user') {
        this.authService.loggedAsUser()
      } else {
        return undefined
      }
    })
  }

  public logout() {
    if (confirm('Вы точно хотите выйти?')) {
      this.authService.logout()
      this.router.navigate(['/'])
    }
  }
}
