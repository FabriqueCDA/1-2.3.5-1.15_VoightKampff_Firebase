import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { CompteComponent } from './pages/compte/compte.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { QuestionComponent } from './pages/question/question.component';
import { AgentsGuard } from './utils/securite/agents.guard';
import { IdentifieGuard } from './utils/securite/identifie.guard';

const routes: Routes = [
  {path:'', component:AccueilComponent},
  {path:'question', component:QuestionComponent, canActivate:[IdentifieGuard]},
  {path:'question/:p', component:QuestionComponent, canActivate:[IdentifieGuard]},
  {path:'connexion', component:ConnexionComponent},
  {path:'compte', component:CompteComponent},
  {path:'agents', loadChildren: () => import('./agents/agents.module').then(m => m.AgentsModule), canActivate:[AgentsGuard], canLoad:[AgentsGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
