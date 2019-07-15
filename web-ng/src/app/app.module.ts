import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {CategoriesComponent} from './categories/categories.component';
import {ProjectsComponent} from './projects/projects.component';
import {ArticlesComponent} from './articles/articles.component';
import {ProjectDetailComponent} from './project-detail/project-detail.component';
import {ArticleDetailComponent} from './article-detail/article-detail.component';
import {ProjectPreviewComponent} from './project-preview/project-preview.component';
import {ArticlePreviewComponent} from './article-preview/article-preview.component';
import {LoginComponent} from './login/login.component';
import {AdminComponent} from './admin/admin.component';

import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {environment} from '../environments/environment';
import {FormsModule} from '@angular/forms';
import { AdminProjectsComponent } from './admin-projects/admin-projects.component';
import { AdminArticlesComponent } from './admin-articles/admin-articles.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminArticlePreviewComponent } from './admin-article-preview/admin-article-preview.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        CategoriesComponent,
        ProjectsComponent,
        ArticlesComponent,
        ProjectDetailComponent,
        ArticleDetailComponent,
        ProjectPreviewComponent,
        ArticlePreviewComponent,
        LoginComponent,
        AdminComponent,
        AdminProjectsComponent,
        AdminArticlesComponent,
        AdminDashboardComponent,
        AdminArticlePreviewComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule, // imports firebase/firestore, only needed for database features
        AngularFireAuthModule, // imports firebase/auth, only needed for auth features
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
