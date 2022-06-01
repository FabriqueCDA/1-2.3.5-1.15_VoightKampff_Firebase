# Firebase (par Angular), un pas vers le cloud
Le projet va nous amener à développer le célèbre test de Voight Kampff. Il s'agit d'un questionnaire permettant de détecter l'origine extraterrestre de votre interlocuteur. 
Dans le cadre de nos développements, nous allons créer un système complet basé sur Firebase permettant l'inscription des utilisateurs, la sécurisation des accès et la gestion des données (questions et réponses). A la fin nous aurons une système complet comprenant back et front.
Ce sera l'occasion d'aborder une des logiques et l'un des outils du Cloud pour les développeurs.

## Pré-requis
Des connaissances en Angular seront nécessaires pour ce projet.

> Compétences travaillées : 
> 1.2 - Développer une interface utilisateur de type desktop
> 1.3 - Développer ds composants d'accès aux données
> 1.5 - Développer la partie back-end d'une application
> 3.15 - Préparer et exécuter le déploiement d'une application

## Etape 1 - projet Angular
Créez un projet Angular avec un routage, facile.

## Etape 2 - Créer un projet Firebase
Pour ce faire, vous devrez [Avoir un compte Google](https://firebase.google.com/) et vous connecter sur le lien 'Go to console' en haut à droite de la page.
Dans la console, cliquez sur 'Créer un projet', trouvez-lui un nom. Un petit tour de spinner et votre projet sera créé.

### Quelques infos vite fait
#### Formules
Deux formules sont disponibles : Spark, Blaze. La première est gratuite mais limitée, la seconde potentiellement payante mais nécessaire pour utiliser les fonctions introduites ci-dessous.

#### Les fonctionnalités initiales pour les développeurs
Permettra de créer des comptes et d'administrer les accès côté front et back.
- Firestore Database
Une base de données NoSQL dans laquelle on va stocker du JSON.
- Realtime Database
Une base de données temps réel qui va faire des appels pour syncrhoniser les données entre le front et le back.
- Extensions
Des extensions clé en main pour connecter votre back à d'autres systèmes (souvent des API).
- Storage
Utilisez les capacité de stockage du Cloud et gérer des Buckets.
- Hosting
Un hébergement particulièrement bien foutu pour Angular (ng deploy configuré automatiquement). Un sous-domaine de l'appli est fourni avec.
- Functions
Utiliser des images pour gérer des traitements spécifiques. Une solutions serverless.
- Machine Learning
...

## Etape 3 - Ajouter Firebase à Angular
### Paramétrer le projet Firebase
- Dans votre projet, dans la console Firebase en ligne, cliquez sur l'engrenage a droite de 'Vue d'ensemble du projet' ;
- pour accéder aux paramètres du projet. En bas du premier onglet cliquez sur le picto de code <> ;
- donnez un pseudo à l'application et cliquez sur configurer 'Firebase Hosting' pour enregistrer l'application.

### Passons par le CLI de Firebase
Suivez les procédures suivantes :
- installer le cli de Firebase : `npm install -g firebase-tools` ;
- s'identifier : `firebase login` (la fenêtre du navigateur s'ouvre...) ;
- lister les applications : `firebase projects:list` manière de voir ce que nous avons en stock ;
- initialiser une application : `firebase init`, la configuration va vous demander quoi utiliser, choisissez tout si vous voulez (nous n'utiliserons pas le remote config) ;
- choisissez l'application que nous venons de créer sur la console. Suivez les paramètres par défaut demandés, choisissez europe pour le Cloud, ça paraît le plus cohérent. Quelques options à choisir aussi : typescript yes, hosting public yes, configure single-app yes, deploy automatic sur Github no (on aura un ng deploy) ;

Nota bene : il est possible de récupérer le fichier de configuration édité sur la console Firebase et de le copier dans le projet.

### L'émulateur
Pendant l'installation de firebase localement vous pouvez choisir d'installer un émulateur. Ca peut être une solution. En choisissant ses options, vous serez amenés à télécharger les fichier JAVA permettant de simuler les fonctionnalités de Firebase.

### Créer une base Firestore
Dans la console, le projet, cliquez sur Firestore puis 'Ajouter une base'. Choisissez la zone dans laquelle vous l'installez. 

### Installation du SDK
- nous allons installer le SDF dans Angular. Attention, n'utilisez pas l'option NPM proposée :
`ng add @angular/fire` (sur linux utilisez sudo si vous avez une erreur)

Pendant l'installation il vous sera demandé de valider certaines fonctionnalités. Nous sommes ici pour découvrir donc nous allons en couvrir un bon nombre. Choisissez (touche espace puis entrer):
- ng deploy -- hosting
- Authentication
- Firestore
- Realtime Database
- Cloud Functions (callable)
- Cloud Messaging
- Cloud Storage
Vous pouvez cocher les autres fonctions si vous voulez mais nous ne les travaillerons pas.

## Remarques sur les fichiers
Dans vos opérations, vous aurez généré des fichiers, voici quelques remarques.

### Firebase.json
Un fichier de configuration, notamment des ports. Rien de spécial à signaler dessus.

### Rules
Ces fichiers seront utiles pour l'émulateur afin de simuler les règles de sécurité applicables aux ressources. Nous les regarderons plus tard, c'est une solution très intéressante pour sécuriser les accès aux données.

### AppModule
Ont été importées et paramétrées toutes les classes du SDK dont vous aurez besoin en fonction des modules que vous aurez choisi (firestore, realtime database...).
Notez cette ligne : `provideFirebaseApp(() => initializeApp(environment.firebase))`, le fichier d'environnement est appelé pour récupérer la configuration de firebase. On y trouve toutes les configuration dont Firebase aura besoin pour se connecter.

[Commençons notre travail](./PHASE1.MD)