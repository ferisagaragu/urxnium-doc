import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightEditorComponent } from './highlight-editor.component';

describe('HighlightEditorComponent', () => {
  let component: HighlightEditorComponent;
  let fixture: ComponentFixture<HighlightEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighlightEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
