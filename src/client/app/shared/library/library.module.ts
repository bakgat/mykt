// angular
import { NgModule, Optional, SkipSelf, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { CoreModule } from '../core/core.module';

// app
import { LIBRARY_PROVIDERS } from './index';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    HttpModule,
    RouterModule,
    MaterialModule
  ],
  declarations: [
  ],
  providers: [
    LIBRARY_PROVIDERS
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [
    
  ],
  entryComponents: [
    
  ]
})
export class LibraryModule {

  constructor( @Optional() @SkipSelf() parentModule: LibraryModule) {
    if (parentModule) {
      throw new Error('LibraryModule already loaded; Import in root module only.');
    }
  }
}
