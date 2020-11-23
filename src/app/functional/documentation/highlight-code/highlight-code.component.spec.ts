import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightCodeComponent } from './highlight-code.component';

describe('HighlightCodeComponent', () => {
  let component: HighlightCodeComponent;
  let fixture: ComponentFixture<HighlightCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighlightCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
