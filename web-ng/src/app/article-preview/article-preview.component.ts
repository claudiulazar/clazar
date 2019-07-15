import {Component, Input, OnInit} from '@angular/core';
import {ArticleModel} from '../models/article.model';

@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.scss']
})
export class ArticlePreviewComponent implements OnInit {

    @Input('article') article: ArticleModel;

    constructor() { }

  ngOnInit() {
  }

}
