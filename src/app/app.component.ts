import { Component } from '@angular/core';
import { LayoutEventManagerService } from './_services/_event-managers/layout-event-manager.service';
import { LayoutType } from './_models/layout/layout-manager';
import { NavigationEnd, Router } from '@angular/router';
import { authLinkHref } from './_assets/links.data';
import { filter } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'colink';
  layoutType : LayoutType = 'standard';
  constructor(
    private _layoutEventManager: LayoutEventManagerService,
    private _router : Router
  ) { }

  ngOnInit() {
    this._layoutEventManager.layoutType$.subscribe((layoutType) => {
      this.layoutType = layoutType;
      console.log("next" , layoutType)
    });

    this._router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event) => {
      // get url matcher
      // if url matcher match
      if ( authLinkHref.includes( (event as any ).url ) ) {
        this._layoutEventManager.setLayoutType('auth');
      } else {
        this._layoutEventManager.setLayoutType('standard');
      }
    });
  }
}
