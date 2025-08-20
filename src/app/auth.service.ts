import { Injectable } from '@angular/core';
import { IAuthUser } from './Interfaces/IAuthUser';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly authUserSubject$: BehaviorSubject<IAuthUser | null> = new BehaviorSubject<IAuthUser | null>(null)
  public user$: Observable<IAuthUser | null> = this.authUserSubject$.asObservable()

  private user: IAuthUser = {
    name: 'Alex',
    lastname: 'Smith',
    isAdmin: false,
  }

  public loggedAsAdmin() {
    this.authUserSubject$.next({ ...this.user, isAdmin: true })
  }

  public loggedAsUser() {
    this.authUserSubject$.next({ ...this.user, isAdmin: false })
  }

  public logout() {
    this.authUserSubject$.next(null)
  }

  public get isAdmin() {
    return this.authUserSubject$.value?.isAdmin
  }
}
