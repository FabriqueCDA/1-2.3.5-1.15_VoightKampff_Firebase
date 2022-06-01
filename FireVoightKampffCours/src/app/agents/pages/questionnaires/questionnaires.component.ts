import { Component, OnInit } from '@angular/core';
import { AgentsService } from 'src/app/utils/services/agents.service';

@Component({
  selector: 'app-questionnaires',
  templateUrl: './questionnaires.component.html',
  styleUrls: ['./questionnaires.component.css']
})
export class QuestionnairesComponent implements OnInit {

  constructor(public agents:AgentsService) { }

  ngOnInit(): void {
    this.agents.connectDBRT();
  }

}
