import { ComponentFixture, TestBed } from '@angular/core/testing';
<<<<<<< HEAD
import { ProfilManagementComponent } from './profil-management.component';
=======

import { ProfilManagementComponent } from './profil-management.component';

>>>>>>> d789f6c0484cb9296c1614da3fc3e558ea045ab3
describe('ProfilManagementComponent', () => {
  let component: ProfilManagementComponent;
  let fixture: ComponentFixture<ProfilManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
<<<<<<< HEAD
=======

>>>>>>> d789f6c0484cb9296c1614da3fc3e558ea045ab3
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
