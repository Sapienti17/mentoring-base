import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[appButtonHover]',
  standalone: true,
})

export class ButtonDirective {
  private readonly elementRef: ElementRef<HTMLElement> = inject(ElementRef)

  @HostListener('mouseenter') onEnter() {
    this.elementRef.nativeElement.style.backgroundColor = '#f0ba4e';
  }

  @HostListener('mouseleave') onLeave() {
    this.elementRef.nativeElement.style.backgroundColor = '';
  }

}
