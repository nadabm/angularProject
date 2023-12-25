import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DegusterComponent } from './deguster.component';

describe('DegusterComponent', () => {
  let component: DegusterComponent;
  let fixture: ComponentFixture<DegusterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DegusterComponent]
    });
    fixture = TestBed.createComponent(DegusterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
