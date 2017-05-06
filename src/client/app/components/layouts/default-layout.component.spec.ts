// angular
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Route } from '@angular/router';
import { MaterialModule } from '@angular/material';

// app
import { t } from '../../shared/test/index';
import { DEFAULT_COMPONENTS } from './index';

const config: Route[] = [

];

// test module configuration for each test
const testModuleConfig = () => {
    TestBed.configureTestingModule({
        imports: [
            MaterialModule,
            RouterTestingModule
        ],
        declarations: [...DEFAULT_COMPONENTS, TestComponent]
    });
};

export function main() {
    t.describe('@Component: DefaultLayoutComponent', () => {

        t.be(testModuleConfig);

        t.it('should work',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        let sidenavDOMEl = fixture.debugElement.children[0].nativeElement;

                        t.e(sidenavDOMEl.querySelectorAll('md-sidenav')[0]).toBeDefined();
                    });
            }));

        t.it('should contain header library',
            t.async(() => {
                TestBed.compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        let sidenavDOMEl = fixture.debugElement.children[0].nativeElement;

                        let headers = sidenavDOMEl.querySelectorAll('h3');
                        t.e(headers.length).toEqual(1);
                        t.e(headers[0].textContent).toEqual('Bibliotheek');

                        let items = sidenavDOMEl.querySelectorAll('li');
                        t.e(items.length).toEqual(2);
                    });
            }));
    });
}

@Component({
    selector: 'test-cmp',
    template: '<mykt-default-layout></mykt-default-layout>'
})
class TestComponent { }
