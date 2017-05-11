import { TabListComponent } from './tablist.component';
import { TabListHeaderDirective, TabListTitleDirective, TabListSubTitleDirective } from './tablist-header.directive';
import { TabListContentComponent } from './tablist-content.component';
import { TabListItemComponent } from './tablist-item.component';
import { TabListItemHeaderDirective } from './tablist-item-header.directive';

export const TABLIST_COMPONENTS = [
    TabListComponent,
    TabListHeaderDirective,
    TabListTitleDirective,
    TabListSubTitleDirective,
    TabListContentComponent,
    TabListItemComponent,
    TabListItemHeaderDirective
];

export * from './tablist.component';
export * from './tablist-header.directive';
export * from './tablist-content.component';
export * from './tablist-item.component';
export * from './tablist-item-header.directive';
