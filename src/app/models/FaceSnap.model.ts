export class FaceSnap {

 /* title : string | undefined;
  description! : string;
  createdDate! : Date;
  snaps! :number;

  constructor(title : string , description : string, createdDate : Date,snaps :number) {
    this.title = title;
    this.description =description;
    this.createdDate = createdDate;
    this.snaps=snaps;
  }
  all code above we cane replace it by a constructor with public filed
  */

  constructor( public id :number,
               public title : string ,
              public description : string,
              public createdDate : Date,
              public img1Url :string,
              public snaps :number,
              // avec  ? l'ajout de l'argument est optionel
              public location?: string
  ) {}



  }
