import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipPermissionComponent } from './chip-permission.component';

describe('ChipPermissionComponent', () => {
  let component: ChipPermissionComponent;
  let fixture: ComponentFixture<ChipPermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChipPermissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
