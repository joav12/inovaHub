import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { ContaComponent } from './components/conta/conta.component';
import { RoadmapComponent } from './components/roadmap/roadmap.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'ranking', component: RankingComponent},
    {path: 'conta', component: ContaComponent},
    {path: 'roadmap/:curso', component: RoadmapComponent}
];
