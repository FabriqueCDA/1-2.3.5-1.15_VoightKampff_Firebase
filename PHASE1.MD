# Voight Kampff test : PHASE 1, FIRESTORE
Notre application va permettre de proposer des questions à des personnes soupçonnées d'être des extraterrestres. Les agents vont pouvoir suivre en temps réel les réponses qui sont faites pour analyser les résultats et 
Commençons par la racine.

## Commentaires sur le SDK
Le SDK de Firebase prévoie beaucoup et donne tout ce qu'il peut avec autant de simplicité que possible. Pour chaque service, des méthodes sont données pour lire, écrire, interagir. Il faut connaître les bonnes méthodes (malheureusement, l'aide n'est pas à jour...) et mettre en place les configurations initiales pour les manipuler.
Globalement, il va s'agir de créer une application et d'appeler les méthodes pour chaque service. Une fois mis en place, c'est extrêmement simple.

## Insertion des données
Insérons le fichier JSON joint dans la base Firestore. Nous allons commencer en récupérant les données. Deux options vous sont offertes, copier chaque élément ou insérer l'ensemble des données. Pour l'instant nous le faisons manuellement.
On peut [obtenir ça](./images/Firestore_option.jpg) [ou ça](./images/Firestore_option2.jpg). Votre code dépendra de ce choix.
Données en place, nous pouvons les appeler.

## Appel des données Firestore
Application, collection, document, les trois principaux concepts pour récupérer les données dans Firestore.

1 - `ng g s utils/services/questions` pour créer un service. Dans ce fichier, créer un pointeur vers Firestore
2 - `constructor(private fire:Firestore)` c'est le lien vers le services Firestore dont nous aurons besoin pour chaque appel.
3 - Pour appeler les questions dans la base nous aurons besoin d'import la méthode getDocs (pour appeler tous les documents) et l'objet collection qui va servir de paramètre. Vous devrez avoir ces imports :
`import { Firestore, getDocs, collection } from '@angular/fire/firestore';`
4 - Voici le code pour appeler les documents :
```
// Appeler des données depuis Firestore
async getFireQuestions() {
  return await getDocs(collection(this.fire, 'questions'));
}
```
La méthode getDocs prend une collection en argument elle même composée du lien vers la configuration de Firestore et du nom de la collection à appeler.
5 - Appeler tout ça
On crée un nouveau composant : `ng g c pages/question`, on appelle le service `constructor(public s:QuestionsService)` et on appelle la méthode dans onInit :
```
this.q.getFireQuestions()
  .then(d => {
    d.forEach(
      f => {
        // f.data() est une méthode qui récupère les données
        // QUestionI est une interface que vous pouvez créer
        this.q.questions.push(f.data() as QuestionI);
      }
    );
  }
);
```
Tout est prêt pour créer un petit formulaire HTML et le faire défiler question après question. C'est la pause code.

[Pasons à l'authentification](./PHASE2.MD)
[Pour consulter une référence de ANgularFire](https://github.com/angular/angularfire/blob/master/docs/version-7-upgrade.md)