import { Component } from '@angular/core';
import { AuthService } from './utils/services/auth.service';
import { StoreService } from './utils/services/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Voight Kampff Cours (to Firebase)';
  constructor(public store:StoreService, public auth:AuthService){}
}