import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentsRoutingModule } from './agents-routing.module';
import { AccueilAgentsComponent } from './pages/accueil-agents/accueil-agents.component';
import { QuestionnairesComponent } from './pages/questionnaires/questionnaires.component';
import { ComptesComponent } from './pages/comptes/comptes.component';

@NgModule({
  declarations: [
    AccueilAgentsComponent,
    QuestionnairesComponent,
    ComptesComponent
  ],
  imports: [
    CommonModule,
    AgentsRoutingModule
  ]
})
export class AgentsModule { }
