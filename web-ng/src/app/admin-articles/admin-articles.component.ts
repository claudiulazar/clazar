import {Component, OnInit} from '@angular/core';
import {AngularFirestore, DocumentChangeAction} from '@angular/fire/firestore';
import {ArticleModel} from '../models/article.model';
import {ArticleService} from '../services/article.service';

@Component({
    selector: 'app-admin-articles',
    templateUrl: './admin-articles.component.html',
    styleUrls: ['./admin-articles.component.scss']
})
export class AdminArticlesComponent implements OnInit {

    articles: DocumentChangeAction<any>[];
    newArticle: ArticleModel = new ArticleModel();
    articleId: string;
    addingNew = false;
    editMode = false;

    constructor(private articleService: ArticleService) {
    }

    ngOnInit() {
        this.articleService.getAllArticles().subscribe(
            articles =>{
                this.articles = articles;
            }
        );
    }

    createNewArticle() {
        return this.articleService.createNewArticle(this.newArticle);
    }

    editArticle(articleDocument: DocumentChangeAction<any>) {
        this.newArticle = articleDocument.payload.doc.data();
        this.articleId = articleDocument.payload.doc.id;
        this.editMode = true;
    }
    deleteArticle(articleId) {
        this.articleService.deleteArticle(articleId);
    }

    updateArticle() {
        this.articleService.updateArticle(this.newArticle, this.articleId);
    }

}
