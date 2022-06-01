import { Injectable } from '@angular/core';
import { Firestore, getDocs, getDoc, collection, doc } from '@angular/fire/firestore';
import { setDoc } from '@firebase/firestore';
import { QuestionI } from '../modeles/question-i';
import { UserI } from '../modeles/user-i';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  pages:any = {};
  // fire = pointeur vers la classe Firestore contenant les paramètres de connexion
  constructor(private fire:Firestore) {
    this.getFirePages();
  }

  /** 
   * Récupérer tous les documents d'une collection
   * */
  getFirePages(){
    getDocs(collection(this.fire, 'pages'))
    .then(d => {
      d.forEach(p => {
        this.pages[p.id] = p.data();
      })
    })
    .catch(er => console.log(er));
  }
  /** Ecrire les questions dans base de données */
  setFireQuestions(id:string, question:QuestionI){
    const questionsDoc = doc(this.fire, 'questions', id); // Date.now()
    setDoc(questionsDoc, question, {merge:true} );
  }
  /** Ecrire les utilisateurs */
  setFireUsers(u:UserI){
    const uDoc = doc(this.fire, 'users', u.uid!);
    setDoc(uDoc, u, {merge:true} );
  }
  /** Mettre à jour le score d'un utilisateur */
  setFireUserScore(u:UserI){
    const uDoc = doc(this.fire, 'users', u.uid!);
    setDoc(uDoc, {score:u.score}, {merge:true} );
  }
  /** Récupérer un utilisateur à partir de son UID */
  async getFireUser(uid:string){
    const uDoc = doc(this.fire, 'users', uid);
    return await getDoc(uDoc);
  }
}
