export interface UserI {
    uid?:string;
    email:string;
    pass:string;
    displayName?:string;
    photoURL?:string;
    emailVerified?:boolean;
    score:number;
    signalement?:boolean;
    statut:number;
}
export class User implements UserI{
    uid='';
    email='';
    pass='';
    displayName='';
    emailVerified=false;
    score=0;
    signalement=true;
    statut=0;
}