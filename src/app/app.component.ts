import { Component } from '@angular/core';
import { LayoutEventManagerService } from './_services/_event-managers/layout-event-manager.service';
import { LayoutType } from './_models/layout/layout-manager';
import { Router } from '@angular/router';
import { authLinkHref } from './_assets/links.data';
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
      layoutType = layoutType;
    });

    this._router.events.subscribe((event) => {
      // get url matcher
      // if url matcher match
      console.log( event )
      // if (  ) {
      //   this._layoutEventManager.setLayoutType('auth');
      // };
    });
  }
}
