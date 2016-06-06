/**
 * Created by luyuannie on 16/6/4.
 */
import { bootstrap } from "@angular/platform-browser-dynamic";
import { Component } from "@angular/core";
import {Article} from "./article";

@Component({
    selector: 'reddit-article',
    host: {
        class: 'row'
    },
    inputs: ['article'],
    template: `
<div class="four wide column center aligned votes">
<div class="ui statistic">
<div class="value"> {{ article.votes }}</div>
<div class="label"> Points </div>
</div>
</div>
<div class="twelve wide column">
<a class="ui large header" href="{{ article.link }}"> {{ article.title }}</a>
<ul class="ui big horizontal list voters">
<li class="item">
<a href (click)="voteUp()"> <i class="arrow up icon"></i> upvote </a>
</li>
<li class="item">
<a href (click)="voteDown()"> <i class="arrow down icon"></i> downvote </a>
</li>
</ul>
</div>
` })
export class ArticleComponent {
    article: Article;
   /* constructor(){
        this.article= new Article('Angular 2', 'http://angular.io', 3);
    }*/
    voteUp():boolean{
        this.article.voteUp();
        return false;
    }
    voteDown():boolean{
        this.article.voteDown();
        return false;
    }
}
//export class ArticleComponent{}