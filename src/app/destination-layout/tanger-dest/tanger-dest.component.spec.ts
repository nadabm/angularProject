import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TangerDestComponent } from './tanger-dest.component';

describe('TangerDestComponent', () => {
  let component: TangerDestComponent;
  let fixture: ComponentFixture<TangerDestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TangerDestComponent]
    });
    fixture = TestBed.createComponent(TangerDestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
