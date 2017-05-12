//angular
import { Component, HostBinding } from '@angular/core';

//app
import { TabListComponent } from './tablist.component';

@Component({
    selector: 'mykt-tablist-header',
    template: '<ng-content></ng-content>'
})
export class TabListHeaderComponent {
    @HostBinding('class.mykt-tablist-header') baseCssClass = true;

    /* tslint:disable:no-empty */
    constructor(parent: TabListComponent) { }
}

@Component({
    selector: 'mykt-tablist-title',
    template: '<ng-content></ng-content>'
})
export class TabListTitleComponent {
    @HostBinding('class.mykt-tablist-title') baseCssClass = true;
}

@Component({
    selector: 'mykt-tablist-subtitle',
    template: '<ng-content></ng-content>'
})
export class TabListSubTitleComponent {
    @HostBinding('class.mykt-tablist-subtitle') baseCssClass = true;
}
