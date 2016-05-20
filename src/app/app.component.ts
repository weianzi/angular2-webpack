import { Component } from '@angular/core';
import '../../public/css/styles.less';
import {
    RouteConfig,
    ROUTER_DIRECTIVES,
    ROUTER_PROVIDERS,
} from '@angular/router-deprecated';
import { HTTP_PROVIDERS } from '@angular/http';
import { ListComponent } from './list.component';
import { DetailComponent } from './detail.component';

@Component({
    selector: 'my-app',
    template: require('./app.component.html'),
    styles: [require('./app.component.css')],
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS]
})

@RouteConfig([
    {
        path: '/list',
        name: 'List',
        component: ListComponent
    },
    {
        path: '/detail/:id',
        name: 'Detail',
        component: DetailComponent
    }
])

export class AppComponent {
    title = '我的站点';    
}
