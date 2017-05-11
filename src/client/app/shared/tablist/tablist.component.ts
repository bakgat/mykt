//angular
import { Component, ViewEncapsulation, Input, ContentChild } from '@angular/core';

//app
import { TabListContentComponent } from './tablist-content.component';
@Component({
    moduleId: module.id,
    selector: 'mykt-tablist',
    templateUrl: 'tablist.component.html',
    styleUrls: ['tablist.component.css'],
    host: {
        '[class.mykt-tablist]': 'true'
    },
    encapsulation: ViewEncapsulation.None
})
export class TabListComponent {
    @ContentChild(TabListContentComponent) _content: TabListContentComponent;

    @Input() selectedIndex: number = -1;

    closeAll() {
        this._content.closeAll();
    }
}