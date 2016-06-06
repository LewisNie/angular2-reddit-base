/**
 * Created by luyuannie on 16/6/4.
 */
import { Component } from "@angular/core";
import {ArticleComponent} from "./articleComponents"
import {Article} from "./article";

@Component({
    selector: 'reddit',
    //
    template:`
<form class="ui large form segment" style="background:#F2FAFF">
<h3 class="ui header">Add a Link</h3>
<div class="field">
<label for="title">Title:</label>
<input name="title" #newtitle>
</div>
<div class="field">
<label for="link">Link:</label>
<input name="link" #newLink>
<p>ng model is newLink is: {{newLink.value}}</p>
</div>
<button class="ui positive right floated button"
(click)="addArticle(newtitle,newLink)">
Submit link
</button>
</form>
<div class="ui grid posts">
<reddit-article *ngFor="let article of articles"
    [article] = "article" > </reddit-article>
</div>
`,
directives:[ArticleComponent]

})
export class RedditApp {
    names:string [];
    articles : Article[];
    article1:Article;
    //article2:Article;
    constructor(){
        this.names = ["Felipe",'Luyuan',"yan zhang", "lucy"];
        this.articles=[
            new Article('Angular 2', 'http://angular.io', 3),
            new Article('Fullstack', 'http://fullstack.io', 2),
            new Article('Angular Homepage', 'http://angular.io', 1)
        ]
    }
    addArticle(title: HTMLInputElement, link: HTMLInputElement):void{
        //this.articles.push(new Article("hello","www.google.com",0));
        //console.log(`Adding article title: ${title.value} and link: ${link.value}`);
        this.articles.push(new Article(title.value, link.value, 0));
        title.value = '';
        link.value = '';
    };
}