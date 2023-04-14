import { Component } from '@angular/core';
import { UserInfo } from 'src/app/_models/auth/user-info';
import { AuthentificationService } from 'src/app/_services/auth/authentification.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  user? : UserInfo = undefined;
  constructor(
    private _authService : AuthentificationService
  ) {
    this._authService.user.subscribe((user) => {
      this.user = user;
    });
  }
}
