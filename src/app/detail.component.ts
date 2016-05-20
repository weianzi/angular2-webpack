import { Component, OnInit } from '@angular/core';
import { Router, RouteParams } from '@angular/router-deprecated';
import {AppService} from '../common/app.service';
import { Detail } from '../common/detail';

@Component({
    selector: 'detail',
    template: require('./detail.component.html'),
    styles: [require('./detail.component.css')],
    providers: [AppService]
})

export class DetailComponent implements OnInit {
    title = '详情页';
    errorMessage: string;
    storyDetail: string;


    constructor(
        private appService: AppService,
        private routeParams: RouteParams,
        private router: Router){

    }

    ngOnInit(){
        let id = +this.routeParams.get('id');
        this.getStoryDetail(id);
    }

    getStoryDetail(id: number) {
        this.appService.getStoryDetail(id)
            .subscribe(
                response => this.storyDetail = response.Story.Content,
                error => this.errorMessage = <any>error
            );
    }

}