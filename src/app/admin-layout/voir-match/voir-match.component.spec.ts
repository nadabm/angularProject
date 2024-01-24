import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirMatchComponent } from './voir-match.component';

describe('VoirMatchComponent', () => {
  let component: VoirMatchComponent;
  let fixture: ComponentFixture<VoirMatchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoirMatchComponent]
    });
    fixture = TestBed.createComponent(VoirMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
