import { Directive } from '@angular/core';

@Directive({
    selector: 'mykt-tablist-header',
    host: {
        '[class.mykt-tablist-header]': 'true'
    }

})
export class TabListHeaderDirective {

}

@Directive({ 
    selector: 'mykt-tablist-title', 
    host: { '[class.mykt-tablist-title]': 'true'} 
}) 
export class TabListTitleDirective { }

@Directive({ 
    selector: 'mykt-tablist-subtitle', 
    host: { '[class.mykt-tablist-subtitle]': 'true'} 
}) 
export class TabListSubTitleDirective { }