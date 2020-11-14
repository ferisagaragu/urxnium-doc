import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAuthorizationComponent } from './section-authorization.component';

describe('SectionAuthorizationComponent', () => {
  let component: SectionAuthorizationComponent;
  let fixture: ComponentFixture<SectionAuthorizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionAuthorizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionAuthorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
