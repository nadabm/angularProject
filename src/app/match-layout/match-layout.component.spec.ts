import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchLayoutComponent } from './match-layout.component';

describe('MatchLayoutComponent', () => {
  let component: MatchLayoutComponent;
  let fixture: ComponentFixture<MatchLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatchLayoutComponent]
    });
    fixture = TestBed.createComponent(MatchLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
