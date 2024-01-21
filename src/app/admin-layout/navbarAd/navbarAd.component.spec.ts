import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarAdComponent } from './navbarAd.component';

describe('DashboardComponent', () => {
  let component: NavbarAdComponent;
  let fixture: ComponentFixture<NavbarAdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarAdComponent]
    });
    fixture = TestBed.createComponent(NavbarAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
