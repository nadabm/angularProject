import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoLayoutComponentComponent } from './reco-layout-component.component';

describe('RecoLayoutComponentComponent', () => {
  let component: RecoLayoutComponentComponent;
  let fixture: ComponentFixture<RecoLayoutComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecoLayoutComponentComponent]
    });
    fixture = TestBed.createComponent(RecoLayoutComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
