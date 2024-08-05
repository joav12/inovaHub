import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RankingComponent } from './components/ranking/ranking.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'ranking', component: RankingComponent}
];
