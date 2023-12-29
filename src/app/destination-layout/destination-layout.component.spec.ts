import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationLayoutComponent } from './destination-layout.component';

describe('DestinationLayoutComponent', () => {
  let component: DestinationLayoutComponent;
  let fixture: ComponentFixture<DestinationLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DestinationLayoutComponent]
    });
    fixture = TestBed.createComponent(DestinationLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
