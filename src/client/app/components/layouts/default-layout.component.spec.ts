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

let menu = [{
    name: 'Bibliotheek',
    items: [
      { name: 'Boeken', link: '/library/books', icon: 'library_books' },
      { name: 'Films', link: '/library/movies', icon: 'movie_filter' }
    ]
  }];
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
                        let items = sidenavDOMEl.querySelectorAll('li');

                        for(var i=0;i<menu.length-1;i++) {
                            t.e(headers[i].textContent).toEqual(menu[i].name);
                            for(var x=0;x<menu[i].items.length -1; x++) {
                                t.e(items[(i+1)*x].textContent).toEqual(menu[i].items[x].name);
                                t.e(items[(i+1)*x].attribute('href')).toEqual(menu[i].items[x].link);
                            }
                        }                        
                    });
            }));
    });
}

@Component({
    selector: 'test-cmp',
    template: '<mykt-default-layout></mykt-default-layout>'
})
class TestComponent { }
