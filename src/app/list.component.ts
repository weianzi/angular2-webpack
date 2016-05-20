import { Component } from '@angular/core';
import { Router } from '@angular/router-deprecated';

@Component({
    selector: 'list',
    template: require('./list.component.html'),
    styles: [require('./list.component.css')]
})

export class ListComponent {
    title = '列表';
}