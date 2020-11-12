import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRestComponent } from './list-rest.component';

describe('ListRestComponent', () => {
  let component: ListRestComponent;
  let fixture: ComponentFixture<ListRestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
