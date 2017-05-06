// angular
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Route } from '@angular/router';
import { MaterialModule } from '@angular/material';

// app
import { t } from '../../../shared/test/index';
import { DefaultToolbarComponent } from './default-toolbar.component';


// test module configuration for each test
const testModuleConfig = () => {
    TestBed.configureTestingModule({
        imports: [
            MaterialModule
        ],
        declarations: [DefaultToolbarComponent, TestComponent]
    });
};

export function main() {
    t.describe('@Component: DefaultToolbarComponent', () => {

        t.be(testModuleConfig);

        t.it('should contain header library',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();

                        let toolbarInstance = fixture.debugElement.children[0].componentInstance;
                        let toolbarDOMEl = fixture.debugElement.children[0].nativeElement;

                        t.e(toolbarDOMEl.querySelectorAll('h1')[0].textContent).toEqual('Mijn Klimtoren');
                    });
            }));
    });
}

@Component({
    selector: 'test-cmp',
    template: '<mykt-default-toolbar></mykt-default-toolbar>'
})
class TestComponent { }
