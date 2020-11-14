import { AfterViewInit, Directive, ElementRef } from '@angular/core';
import { CodeJar } from 'codejar';
import Prism from 'prismjs';

@Directive({
  selector: '[appHighlightEditor]'
})
export class HighlightEditorDirective implements AfterViewInit {

  private readonly options: any;

  constructor(private elementRef: ElementRef) {
    this.options = {
      tab: ' '.repeat(2),
      indentOn: /[(\[]$/
    };
  }

  ngAfterViewInit(): void {
    const element = this.elementRef.nativeElement;
    const editor = CodeJar(element, this.highlight, this.options);
    element.classList.add('highlight-editor');
    element.classList.add('scroll');
  }

  private highlight(editor: HTMLElement): void {
    editor.innerHTML = Prism.highlight(
      editor.textContent.replace(' {', '{'),
      Prism.languages.javascript
    );
  }

}
