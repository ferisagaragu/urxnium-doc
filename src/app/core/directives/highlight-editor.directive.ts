import { AfterViewInit, Directive, ElementRef, EventEmitter, Output } from '@angular/core';
import { CodeJar } from 'codejar';
import Prism from 'prismjs';

@Directive({
  selector: '[appHighlightEditor]'
})
export class HighlightEditorDirective implements AfterViewInit {

  private readonly options: any;
  @Output() change: EventEmitter<string>;

  constructor(private elementRef: ElementRef) {
    this.options = {
      tab: ' '.repeat(2),
      indentOn: /[(\[]$/
    };
    this.change = new EventEmitter<string>();
  }

  ngAfterViewInit(): void {
    const element = this.elementRef.nativeElement;
    const editor = CodeJar(element, this.highlight, this.options);
    element.classList.add('highlight-editor');
    element.classList.add('scroll');

    editor.onUpdate(code => {
      this.change.emit(code);
    })
  }

  private highlight(editor: HTMLElement): void {
    editor.innerHTML = Prism.highlight(
      editor.textContent.replace(' {', '{'),
      Prism.languages.javascript
    );
  }

}
