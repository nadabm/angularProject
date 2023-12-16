import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeeDeVoyageComponent } from './idee-de-voyage.component';

describe('IdeeDeVoyageComponent', () => {
  let component: IdeeDeVoyageComponent;
  let fixture: ComponentFixture<IdeeDeVoyageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IdeeDeVoyageComponent]
    });
    fixture = TestBed.createComponent(IdeeDeVoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
