import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/utils/services/questions.service';
import { StoreService } from 'src/app/utils/services/store.service';
import { QI } from 'src/app/utils/modeles/question-i';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/utils/services/auth.service';
import { AgentsService } from 'src/app/utils/services/agents.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  index: number = 0;
  question: QI = <QI>{};
  rep:number = 0;

  constructor(public store: StoreService, public q: QuestionsService, private route:ActivatedRoute, private auth:AuthService, private agents:AgentsService) { }
  /** Récupérer la liste des questions */
  ngOnInit(): void {
    this.auth.user.score = 0; // Score de l'utilisateur remis à 0
    // Gestion des routes et des paramètres injectés
    this.route.params.subscribe(param => {
      this.index = param['p'] | 0;
    });
    // 
    this.q.getFireListeQuestions()
      .then(d => d.data())
      .then(q => {
        this.q.listeQuestions = JSON.parse(q!['questions']);
        this.question = this.q.listeQuestions[this.index];
        console.log(this.question);
      })
      .catch(er => console.log(er));
  }
  /** Change question */
  changeQuestion(){
    if(this.index < this.q.listeQuestions.length) ++this.index;
    this.question = this.q.listeQuestions[this.index];
    this.setScore();
  }
  /** Calculer le score de extraterrestrittude et l'enregistrer dans la base */
  setScore(){
    this.auth.user.score += this.rep;
    console.log(this.auth.user.score);
    this.store.setFireUserScore(this.auth.user); // Envoie des données dans Firestore pour les stocker
    this.agents.sendRT(this.auth.user); // Envoie dans la base de donénes temps réel
  }
  log(){
    console.log(this.rep);
  }
}
