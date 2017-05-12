//angular
import { Component, HostBinding } from '@angular/core';

//app
import { TabListContentComponent } from './tablist-content.component';

@Component({
    selector: 'mykt-tablist-item-content',
    template: '<ng-content></ng-content>'
})
export class TabListItemContentComponent {
    @HostBinding('class.mykt-tablist-item-content') baseCssClass = true;

    /* tslint:disable:no-empty */
    constructor(parent: TabListContentComponent) { }
}
