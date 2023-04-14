import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OthersProfilComponent } from './others-profil.component';

describe('OthersProfilComponent', () => {
  let component: OthersProfilComponent;
  let fixture: ComponentFixture<OthersProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OthersProfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OthersProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
