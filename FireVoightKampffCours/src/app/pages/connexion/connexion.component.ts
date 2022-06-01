import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/utils/services/auth.service';
import { StoreService } from 'src/app/utils/services/store.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  constructor(public store:StoreService, public auth:AuthService) { }

  ngOnInit(): void {
  }
  // Suivre la saisie
  log(){
    console.log(this.auth.user);
  }
}
