import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionResponseComponent } from './section-response.component';

describe('SectionResponseComponent', () => {
  let component: SectionResponseComponent;
  let fixture: ComponentFixture<SectionResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionResponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
