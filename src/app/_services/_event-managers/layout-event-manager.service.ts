import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LayoutType } from 'src/app/_models/layout/layout-manager';

@Injectable({
  providedIn: 'root'
})
export class LayoutEventManagerService {
  private _layoutType : BehaviorSubject<LayoutType> = new BehaviorSubject<LayoutType>('standard');
  public layoutType$ = this._layoutType.asObservable();
  constructor() { }


  setLayoutType(hidden: LayoutType) {
    this._layoutType.next(hidden);
  }
}
