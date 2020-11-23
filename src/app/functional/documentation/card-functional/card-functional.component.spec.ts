import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFunctionalComponent } from './card-functional.component';

describe('CardFunctionalComponent', () => {
  let component: CardFunctionalComponent;
  let fixture: ComponentFixture<CardFunctionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardFunctionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFunctionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
