import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilListProjectComponent } from './profil-list-project.component';

describe('ProfilListProjectComponent', () => {
  let component: ProfilListProjectComponent;
  let fixture: ComponentFixture<ProfilListProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilListProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilListProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
