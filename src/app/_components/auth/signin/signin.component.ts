import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LayoutEventManagerService } from 'src/app/_services/_event-managers/layout-event-manager.service';
import { AuthentificationService } from 'src/app/_services/auth/authentification.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  constructor(
   private _authService: AuthentificationService,
  ) {
  }

}
