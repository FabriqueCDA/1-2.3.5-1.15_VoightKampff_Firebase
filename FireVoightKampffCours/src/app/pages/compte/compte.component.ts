import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/utils/services/auth.service';
import { StoreService } from 'src/app/utils/services/store.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {

  constructor(public store:StoreService, public auth:AuthService) { }

  ngOnInit(): void {
  }
}
