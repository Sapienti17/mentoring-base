import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[appCardShadow]',
  standalone: true,
})

export class CardShadowDirective {

  private readonly elementRef: ElementRef<HTMLElement> = inject(ElementRef)

  @HostListener('mouseenter') onCardShadowEnter() {
    this.elementRef.nativeElement.style.boxShadow = '0 8px 16px rgba(60, 60, 59, 0.9)'
  }

  @HostListener('mouseleave') onCardShadowLeave() {
    this.elementRef.nativeElement.style.boxShadow = 'none'

  }
}
