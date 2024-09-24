import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { ContaComponent } from './components/conta/conta.component';
import { RoadmapComponent } from './components/roadmap/roadmap.component';
import { AulaComponent } from './components/aula/aula.component';
import { ConfigsComponent } from './components/configs/configs.component';
import { DesafiosComponent } from './components/desafios/desafios.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'ranking', component: RankingComponent},
    {path: 'conta', component: ContaComponent},
    {path: 'roadmap/:curso', component: RoadmapComponent},
    {path: 'roadmap/:curso/aula/:aulaId', component: AulaComponent},
    {path: 'config', component: ConfigsComponent},
    {path: 'desafios', component: DesafiosComponent}
];
