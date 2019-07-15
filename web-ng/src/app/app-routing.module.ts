import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CategoriesComponent} from './categories/categories.component';
import {ProjectsComponent} from './projects/projects.component';
import {ArticlesComponent} from './articles/articles.component';
import {ProjectDetailComponent} from './project-detail/project-detail.component';
import {LoginComponent} from './login/login.component';
import {AdminComponent} from './admin/admin.component';
import {AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';
import {AdminProjectsComponent} from './admin-projects/admin-projects.component';
import {AdminArticlesComponent} from './admin-articles/admin-articles.component';


const routes: Routes = [{
    path: '',
    component: HomeComponent,
    children: [
        {
            path: '',
            component: CategoriesComponent
        },
        {
            path: 'work',
            component: ProjectsComponent
        },
        {
            path: 'articles',
            component: ArticlesComponent
        },
        {
            path: 'work/project/:name',
            component: ProjectDetailComponent,
        },
        {
            path: 'articles/:name',
            component: ArticlesComponent,
        },
        {
            path: 'login',
            component: LoginComponent
        }
    ]
},
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            {
                path: '',
                component: AdminDashboardComponent
            },
            {
                path: 'projects',
                component: AdminProjectsComponent
            },
            {
                path: 'articles',
                component: AdminArticlesComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
