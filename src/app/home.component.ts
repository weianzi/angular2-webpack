import { Component } from '@angular/core';
import { Router } from '@angular/router-deprecated';

@Component({
    selector: 'home',
    template: require('./home.component.html'),
    styles: [require('./home.component.css')]
})

export class HomeComponent {
    title = '首页内容区';

    constructor(private router: Router){
    }

}