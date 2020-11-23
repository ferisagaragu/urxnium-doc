import { AfterViewInit, Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import Prism from 'prismjs';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements AfterViewInit, OnChanges {

  @Input('appHighlight') value: string;
  @Input() language: string;

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    this.setElementCode();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setElementCode();
  }

  private setElementCode(): void {
    const element: HTMLElement = this.elementRef.nativeElement;
    element.innerHTML = Prism.highlight(
      this.value,
      Prism.languages.javascript,
      this.language ? this.language: 'typescript'
    );
    element.classList.add('highlight-container');
    element.classList.add('scroll');
  }

}
