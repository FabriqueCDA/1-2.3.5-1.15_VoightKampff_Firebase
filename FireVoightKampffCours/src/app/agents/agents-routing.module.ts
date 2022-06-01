import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilAgentsComponent } from './pages/accueil-agents/accueil-agents.component';
import { ComptesComponent } from './pages/comptes/comptes.component';
import { QuestionnairesComponent } from './pages/questionnaires/questionnaires.component';

const routes: Routes = [
  {
    path: '', component: AccueilAgentsComponent, children: [
      { path: 'questionnaires', component: QuestionnairesComponent },
      { path: 'comptes', component: ComptesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentsRoutingModule { }
