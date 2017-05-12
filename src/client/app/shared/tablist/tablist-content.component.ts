import { Component, ViewEncapsulation, Output, EventEmitter, Input, HostBinding } from '@angular/core';

//app
import { TabListItemComponent } from './tablist-item.component';

@Component({
    moduleId: module.id,
    selector: 'mykt-tablist-content',
    template: '<ng-content></ng-content>',
    encapsulation: ViewEncapsulation.None
})
export class TabListContentComponent {
    @HostBinding('class.mykt-tablist-content') baseCssClass = true;

    items: TabListItemComponent[] = [];

    @Output() close: EventEmitter<any> = new EventEmitter<any>();
    @Output() open: EventEmitter<any> = new EventEmitter<any>();

    public addItem(item: TabListItemComponent) {
        this.items.push(item);
    }

    public closeAll() {
        for (var i = 0; i < this.items.length; i++) {
            this.items[i].active = false;
        }
    }
}
