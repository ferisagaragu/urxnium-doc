import { AfterViewInit, Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[shell]'
})
export class ShellDirective implements AfterViewInit, OnChanges {

  @Input() shell: string;
  element: HTMLElement;

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    this.element = this.elementRef.nativeElement;
    this.element.classList.add('highlight-shell');
    this.highlightShell();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.highlightShell();
  }

  private highlightShell(): void {
    const parts = this.shell ?
      this.shell.split(' ') : [];
    let out = '> ';

    parts.forEach((item, index) => {
      out +=
        `<span
           style="color: #17ff0b"
         >${item}</span>&nbsp;`
    });

    if (this.element) {
      this.element.innerHTML = out;
    }
  }

}
