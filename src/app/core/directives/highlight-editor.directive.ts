import { AfterViewInit, Directive, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CodeJar } from 'codejar';
import Prism from 'prismjs';

@Directive({
  selector: '[appHighlightEditor]'
})
export class HighlightEditorDirective implements AfterViewInit, OnChanges {

  private readonly options: any;
  private editor: CodeJar;

  @Input() code: any;
  @Output() change: EventEmitter<string>;

  constructor(private elementRef: ElementRef) {
    this.options = {
      tab: ' '.repeat(2),
      indentOn: /[(\[]$/
    };
    this.change = new EventEmitter<string>();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.code.previousValue !== changes.code.currentValue && this.editor) {
      this.editor.updateCode(changes.code.currentValue);
    }
  }

  ngAfterViewInit(): void {
    const element = this.elementRef.nativeElement;
    this.editor = CodeJar(element, this.highlight, this.options);
    element.classList.add('highlight-editor');
    element.classList.add('scroll');

    this.editor.onUpdate(code => {
      this.change.emit(code);
    });
  }

  private highlight(editor: HTMLElement): void {
    editor.innerHTML = Prism.highlight(
      editor.textContent.replace(' {', '{'),
      Prism.languages.javascript
    );
  }

}
