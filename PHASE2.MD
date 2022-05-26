# Voight Kampff test : PHASE 2 - Authentification
Dans cette partie nous allons créer des comptes pour nous authentifier. Authentication offre plein de solutions, nous resterons sur la base, email et mot de passe.
Tout est inclu dans le SDK. Attaquons.

## 1 - Activer l'authentification
Dans la console Firebase, il suffit d'activer l'authenficiation en allant dans le service et de choisir l'option native (email/mot de passe). Pof, c'est fait.

## 2 - Créer un utilisateur
On crée un service : `ng g s utils/services/auth` et on y importe les méthodes dont nous avons besoin :
`import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "@angular/fire/auth";`

On peut ensuite utiliser la méthode de création. Facile et efficace :
```
constructor(private auth:Auth){}

creeUser(p:{mail:string, pass:string}) {
  createUserWithEmailAndPassword(this.auth, p.mail, p.pass)
    .then((retour) => {
      console.log(retour.user);
    })
    .catch((error) => {
      if(error.code == 'auth/email-already-in-use'){
        alert("Cet email existe déjà");
      }else{
        alert("Une erreur s'est produite. Merci de rétenter");
      }
      console.log(error.code, error.message);
    });
}
```
Bien sûr, pour l'utiliser, il vous faut un formulaire adapté. Ajoutez une page de création du compte avec un formulaire renvoyant à la méthode ci-dessus.

## 3 - S'authentifier
Lorsqu'un compte a été créé, un peu s'authentifier. Faites comme pour le compte, créez un formulaire avec identifiant et mot de passe dont les données seront envoyées à la fonction ci-dessous :
```
idUser(connexion: { mail: string, pass: string }) {
  // Fonction du SDK qui gère l'authentification d'un utilisateur
  signInWithEmailAndPassword(this.auth, connexion.mail, connexion.pass)
    .then((r) => {
      this.compte.uid = r.user.uid;
      this.compte.email = connexion.mail;
      alert("Vous êtes authentifié");
    })
    .catch((error) => {
      console.log(error.code, error.message);
      alert(error.message);
  });
}
```
Nous avons vu la version la plus simple qui soit pour gérer une authentification. Tout est clé en main. Vous pouvez jeter un oeil dans la console pour voir les comptes apparaître au fil des créations.

## 4 - Exercice
Ajoutez une collection 'comptes' dans Firestore et ajoutez les utilisateurs qui créent des comptes avec des droits : identifie, editeur et admin.
ps : Ils seront utiles pour utiliser le système de droits d'accès dans Firebase (rules).