import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/utils/services/store.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  /** On crée un pointeur vers le service stockant et appelant les données */
  constructor(public store:StoreService) {}

  ngOnInit(): void {
  }

}
