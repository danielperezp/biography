import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[libA]',
})
export class CustomBtnDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseover') onMouseOver() {
    this.highlight('green');
  }

  private highlight(color: string) {
    const { style } = this.el.nativeElement;
    style.color = color;
  }

}
