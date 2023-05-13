import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: '[customDirective]'
})

export class DirectiveComponent {

  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.backgroundColor = 'yellow';
  }
}
