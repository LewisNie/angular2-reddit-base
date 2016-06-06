"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by luyuannie on 16/6/4.
 */
var core_1 = require("@angular/core");
var articleComponents_1 = require("./articleComponents");
var article_1 = require("./article");
var RedditApp = (function () {
    //article2:Article;
    function RedditApp() {
        this.names = ["Felipe", 'Luyuan', "yan zhang", "lucy"];
        this.articles = [
            new article_1.Article('Angular 2', 'http://angular.io', 3),
            new article_1.Article('Fullstack', 'http://fullstack.io', 2),
            new article_1.Article('Angular Homepage', 'http://angular.io', 1)
        ];
    }
    RedditApp.prototype.addArticle = function (title, link) {
        //this.articles.push(new Article("hello","www.google.com",0));
        //console.log(`Adding article title: ${title.value} and link: ${link.value}`);
        this.articles.push(new article_1.Article(title.value, link.value, 0));
        title.value = '';
        link.value = '';
    };
    ;
    RedditApp = __decorate([
        core_1.Component({
            selector: 'reddit',
            //
            template: "\n<form class=\"ui large form segment\" style=\"background:#F2FAFF\">\n<h3 class=\"ui header\">Add a Link</h3>\n<div class=\"field\">\n<label for=\"title\">Title:</label>\n<input name=\"title\" #newtitle>\n</div>\n<div class=\"field\">\n<label for=\"link\">Link:</label>\n<input name=\"link\" #newLink>\n<p>ng model is newLink is: {{newLink.value}}</p>\n</div>\n<button class=\"ui positive right floated button\"\n(click)=\"addArticle(newtitle,newLink)\">\nSubmit link\n</button>\n</form>\n<div class=\"ui grid posts\">\n<reddit-article *ngFor=\"let article of articles\"\n    [article] = \"article\" > </reddit-article>\n</div>\n",
            directives: [articleComponents_1.ArticleComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], RedditApp);
    return RedditApp;
}());
exports.RedditApp = RedditApp;
//# sourceMappingURL=RedditApp.js.map