// angular
import { NgModule, Optional, SkipSelf, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule, PortalModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

//app
import { TABLIST_COMPONENTS } from './index';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule,
        PortalModule,
        FlexLayoutModule
    ],
    declarations: [
        ...TABLIST_COMPONENTS
    ],
    providers: [
    ],
    schemas: [
        NO_ERRORS_SCHEMA,
        CUSTOM_ELEMENTS_SCHEMA
    ],
    exports: [
        ...TABLIST_COMPONENTS
    ]
})
export class TabListModule {

}