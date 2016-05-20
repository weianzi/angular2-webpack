import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import {AppService} from '../common/app.service';
import { List } from '../common/list';

@Component({
    selector: 'list',
    template: require('./list.component.html'),
    styles: [require('./list.component.css')],
    providers:[AppService]
})

export class ListComponent implements OnInit {
    title = '列表';
    errorMessage: string;
    storyLists: List[];

    constructor(
        private appService: AppService,
        private router: Router){

    }

    ngOnInit(){
        this.getStoryList(1);
    }

    getStoryList(page: number) {
        this.appService.getStoryList(page)
            .subscribe(
                response => this.storyLists = response.Data,
                error => this.errorMessage = <any>error
            );
    }
}