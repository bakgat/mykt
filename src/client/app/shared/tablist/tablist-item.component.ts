import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TabListContentComponent } from './tablist-content.component';

@Component({
    moduleId: module.id,
    selector: 'mykt-tablist-item',
    templateUrl: 'tablist-item.component.html',
    encapsulation: ViewEncapsulation.None,
    host: {
        '[class.mykt-tablist-item-active]': 'active',
        '[class.mykt-tablist-item-disabled]': 'disabled'
    }
})
export class TabListItemComponent {

    private _disabled: boolean = false;
    private _active: boolean = false;

    @Output() onSelect: EventEmitter<any> = new EventEmitter<any>();
    @Output() onSave: EventEmitter<any> = new EventEmitter<any>();
    @Output() onCancel: EventEmitter<any> = new EventEmitter<any>();

    @Input() loading: boolean;
    @Input() cancelLabel: string;
    @Input() saveLabel: string;

    @Input()
    get disabled(): boolean { return this._disabled; }
    set disabled(value) {
        this._disabled = value != null && value != false;
    }

    @Input()
    get active(): boolean { return this._active; }
    set active(value) {
        this._active = value != null && value != false;
        if (this._active) {
            for (let i = 0; i < this._list.items.length; i++) {
                if (this._list.items[i] !== this) {
                    this._list.items[i].active = false;
                }
            }
            this.onSelect.emit();
        }
    }



    constructor(private _list: TabListContentComponent) {
        this._list.addItem(this);
    }

    headerClick(event: Event) {
        if (this.disabled) {
            event.preventDefault();
            return;
        }

        let index = this.findTabIndex();

        if (this.active) {
            this.active = !this.active;
            this._list.close.emit({ originalEvent: event, index: index });
        } else {
            this.active = true;
            this._list.open.emit({ originalEvent: event, index: index });
        }

        event.preventDefault();
    }

    save() {
        this.onSave.emit();
    }
    cancel() {
        this.onCancel.emit();
    }

    findTabIndex() {
        let index = -1;
        for (let i = 0; i < this._list.items.length; i++) {
            if (this._list.items[i] == this) {
                index = i;
                break;
            }
        }
        return index;
    }
}
