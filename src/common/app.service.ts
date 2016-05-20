import { Injectable } from '@angular/core';
import {
    Http,
    Response,
    Headers,
    RequestOptions
} from '@angular/http';
import { Observable } from 'rxjs/observable';
import { List } from './list';

@Injectable()
export class AppService{
    private domain = 'http://weixin.chatu.com';

    constructor(private http: Http){}

    getStoryList(page: number): Observable<any> {
        let url = this.domain + '/api/article/GetList?pageindex=' + page + '&pagesize=10';
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Response status: ' + res.status);
        }
        let body = res.json();
        console.log("返回数据: ")
        console.log(body);
        return body || {}
    }

    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}