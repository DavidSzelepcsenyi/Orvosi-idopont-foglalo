import { Directive, ElementRef, Renderer2, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightOnSelect]'
})
export class HighlightOnSelectDirective {
  @Input() appHighlightOnSelect: string = 'highlight';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('change', ['$event'])
  onChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.type === 'radio' && target.checked) {
      this.renderer.addClass(this.el.nativeElement, this.appHighlightOnSelect);
    } else {
      this.renderer.removeClass(this.el.nativeElement, this.appHighlightOnSelect);
    }
  }
}
