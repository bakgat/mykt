//angular
import { Component, HostBinding } from '@angular/core';

//app
import { TabListItemComponent }  from './tablist-item.component';

@Component({
    selector: 'mykt-tablist-item-header',
    template: '<ng-content></ng-content>'
})
export class TabListItemHeaderComponent {
    @HostBinding('class.mykt-tablist-item-header') baseCssClass = true;

    /* tslint:disable:no-empty */
    constructor(parent: TabListItemComponent) {  }
}
