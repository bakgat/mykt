//angular
import { Component, ContentChild, HostBinding, Input, ViewEncapsulation } from '@angular/core';

//app
import {  TabListContentComponent } from './tablist-content.component';
@Component({
    moduleId: module.id,
    selector: 'mykt-tablist',
    templateUrl: 'tablist.component.html',
    styleUrls: ['tablist.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class TabListComponent {
    @HostBinding('class.mykt-tablist') baseCssClass = true;

    @ContentChild(TabListContentComponent) _content: TabListContentComponent;

    @Input() selectedIndex: number = -1;

    closeAll() {
        this._content.closeAll();
    }
}
