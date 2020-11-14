import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabResponseComponent } from './tab-response.component';

describe('TabResponseComponent', () => {
  let component: TabResponseComponent;
  let fixture: ComponentFixture<TabResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabResponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
