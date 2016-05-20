import { Component } from '@angular/core';
import { Router } from '@angular/router-deprecated';

@Component({
    selector: 'detail',
    template: require('./detail.component.html'),
    styles: [require('./detail.component.css')]
})

export class DetailComponent {
    title = '详情页';
}