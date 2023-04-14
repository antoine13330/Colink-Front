import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OthersProfilPageComponent } from './others-profil-page.component';

describe('OthersProfilPageComponent', () => {
  let component: OthersProfilPageComponent;
  let fixture: ComponentFixture<OthersProfilPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OthersProfilPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OthersProfilPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
