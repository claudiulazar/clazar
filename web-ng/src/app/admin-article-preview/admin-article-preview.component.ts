import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ArticleModel} from '../models/article.model';
import {DocumentChangeAction} from '@angular/fire/firestore';

@Component({
    selector: 'app-admin-article-preview',
    templateUrl: './admin-article-preview.component.html',
    styleUrls: ['./admin-article-preview.component.scss']
})
export class AdminArticlePreviewComponent implements OnInit {


    @Input('article') articleInput: DocumentChangeAction<any>;
    @Output('edit') editEventEmitter = new EventEmitter();
    @Output('delete') deleteEventEmitter = new EventEmitter();

    article: ArticleModel;

    constructor() {
    }

    ngOnInit() {
       this.article = this.articleInput.payload.doc.data();
    }

    edit() {
        this.editEventEmitter.emit(this.articleInput);
    }

    delete() {
        this.deleteEventEmitter.emit(this.articleInput.payload.doc.id);
    }

}
