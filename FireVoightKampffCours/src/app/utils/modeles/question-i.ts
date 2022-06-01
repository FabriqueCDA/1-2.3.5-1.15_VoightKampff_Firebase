export interface QuestionI {
    titre:string;
    reponses:Array<ReponseI>;
}

export interface ReponseI{
    reponse:string;
    score:number;
}

export interface QI {
    enonce:string;
    reponses:Array<ReponseI>;
}