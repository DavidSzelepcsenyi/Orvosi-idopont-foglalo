import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appUrgency]'
})
export class UrgencyDirective {

  @Input() isUrgent: boolean = false;

  constructor(private elRef: ElementRef) { }

  ngOnInit() { 
    if (this.isUrgent) {
      this.elRef.nativeElement.style.backgroundColor = 'red';
    }
  }

}
