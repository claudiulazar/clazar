import {Component, Input, OnInit} from '@angular/core';
import {ArticleModel} from '../models/article.model';
import {ArticleService} from '../services/article.service';
import {DocumentChangeAction} from '@angular/fire/firestore';

@Component({
    selector: 'app-articles',
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
    private articles: DocumentChangeAction<any>[];

    constructor(
        private articleService: ArticleService
    ) {
    }

    ngOnInit() {
        this.articleService.getAllArticles().subscribe(
            articles => this.articles = articles
        );
    }

}
