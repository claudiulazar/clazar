import {Injectable} from '@angular/core';
import {AngularFirestore, DocumentChangeAction} from '@angular/fire/firestore';
import {ArticleModel} from '../models/article.model';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ArticleService {

    constructor(public db: AngularFirestore) {
    }

    createNewArticle(newArticle: ArticleModel) {
        this.db.collection('articles').add({
            title: newArticle.title,
            description: newArticle.description,
            link: newArticle.link,
            tags: newArticle.tags,
        });
    }

    getAllArticles(): Observable<DocumentChangeAction<any>[]> {
        // @ts-ignore
        return this.db.collection('articles').snapshotChanges();
    }

    deleteArticle(articleId: any) {
        this.db.collection('articles').doc(articleId).delete();
    }

    updateArticle(newArticle: ArticleModel, articleId: string) {
        this.db.collection('articles').doc(articleId).set(newArticle);
    }
}
