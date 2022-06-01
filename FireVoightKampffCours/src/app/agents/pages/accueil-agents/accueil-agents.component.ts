import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/utils/services/store.service';

@Component({
  selector: 'app-accueil-agents',
  templateUrl: './accueil-agents.component.html',
  styleUrls: ['./accueil-agents.component.css']
})
export class AccueilAgentsComponent implements OnInit {

  constructor(public store:StoreService) { }

  ngOnInit(): void {
  }

}
