import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-highlight-editor',
  templateUrl: './highlight-editor.component.html',
  styleUrls: ['./highlight-editor.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => HighlightEditorComponent),
      multi: true
    }
  ]
})
export class HighlightEditorComponent implements ControlValueAccessor {

  private onChange: Function;
  private onTouch: Function;
  private disabled: boolean;
  value: string;

  constructor() {
    this.onChange = (_:any) => { };
    this.onTouch = () => { };
    this.disabled = false;
    this.value = '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }

  writeValue(value: any): void {
    this.value = value;
  }

  onChangeCode(event: string) {
    this.onChange(JSON.parse(event));
  }

}
