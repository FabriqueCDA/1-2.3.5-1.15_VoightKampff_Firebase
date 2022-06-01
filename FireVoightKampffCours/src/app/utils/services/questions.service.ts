import { Injectable } from '@angular/core';
import { QuestionI, QI } from '../modeles/question-i';
import { Firestore, getDocs, getDoc, collection, doc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  // Tableau de questions
  questions:Array<QuestionI> = <Array<QuestionI>>[];
  listeQuestions:Array<QI>=<Array<QI>>[];

  constructor(private fire:Firestore) {
    this.getFireQuestions();
  }
  /** Récupérer la liste des questions de la collection éponyme */
  getFireQuestions(){
    getDocs(collection(this.fire, 'questions'))
    .then(d => {
      d.forEach(q => {
        console.log(q.data());
        this.questions.push(q.data() as QuestionI)
      })
    })
    .catch(er => console.log(er));
  }

  /** Récupérer un document spécifique */
  async getFireListeQuestions(){
    const liste = doc(this.fire, 'listequestions', 'brutes');
    return await getDoc(liste);
  }
}
