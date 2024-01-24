import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirEquipeComponent } from './voir-equipe.component';

describe('VoirEquipeComponent', () => {
  let component: VoirEquipeComponent;
  let fixture: ComponentFixture<VoirEquipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoirEquipeComponent]
    });
    fixture = TestBed.createComponent(VoirEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
