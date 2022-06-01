import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { User, UserI } from '../modeles/user-i';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // user: UserI = new User();
  user:UserI = <UserI>{};

  constructor(private auth: Auth, private store: StoreService) {
    this.setUser(); // Créer les valeur par défaut pour le user
  }
  /** Créer un compte utilisateur du Firebase */
  creeFireCompte() {
    createUserWithEmailAndPassword(this.auth, this.user.email, this.user.pass)
      .then(u => {
        this.user.uid = u.user.uid;
        this.user.pass = '';
        this.store.setFireUsers(this.user); // On écrit notre nouvel utilisateur dans la base
      }).catch(er => {
        console.log(er.code, er.message);
        if (er.code.indexOf('invalid-email')) alert("Attention, il y a une erreur dans l'email");
      })
  }
  /** Identifier un utilisateur Firebase */
  idFireUser() {
    signInWithEmailAndPassword(this.auth, this.user.email, this.user.pass)
      .then(retour => {
        this.user.uid = retour.user.uid;
        this.store.getFireUser(this.user.uid)
          .then(u => {
            this.user = u.data() as UserI;
            console.log(this.user);
          })
          .catch(er => console.log(er));
      })
      .catch(er => {
        console.log(er.code, er.message);
        if (er.code.indexOf('wrong-password')) alert("Aïe, ouille, une erreur s'est glissée dans la mot de passe");

      })
  }
  /** Se déconnecter */
  signAhwout(){
    signOut(this.auth)
    .then(out => {
      alert("Vous avez été déconnecté");
      this.user = <UserI>{};
    })
    .catch(er => console.log(er));
  }
  /** Initialiser un utilisateur */
  setUser(){
    this.user = {email:'', pass:'', statut:0, score:0};
  }

  /** Comparer des tableaux */
  compareArray(ar1:Array<any>, ar2:Array<any>){
    return ar1.map(a => ar2.indexOf(a) == -1);
  }
}
