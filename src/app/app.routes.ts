import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotComponentComponent } from './components/page-not-component/page-not-component.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: '**', component: PageNotComponentComponent}
];
