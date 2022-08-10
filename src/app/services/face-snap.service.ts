import {Injectable} from "@angular/core";
import {FaceSnap} from "../models/FaceSnap.model";
import {retry} from "rxjs";

@Injectable({
  providedIn :'root'
})


export class FaceSnapService {

  faceSnaps : FaceSnap[] = [
    { id :1,
      title:'1 My first Snap',
      description:'My childhood friend',
      createdDate: new Date(),
      img1Url: "https://bootdey.com/img/Content/avatar/avatar1.png",
      snaps: 243,
      location:" Los Angelos, California "
    },{
      id :2,
      title:'2 My Second s!u',
      description:'My Brother',
      createdDate: new Date(),
      img1Url: "https://bootdey.com/img/Content/avatar/avatar5.png",
      snaps: 104,
      location:" Manhattan, New York DC"
    },{
      id :3,
      title:'3 th Snap',
      description:'My Brother from another mother',
      createdDate: new Date(),
      img1Url: "https://bootdey.com/img/Content/avatar/avatar4.png",
      snaps:71,
      location:" Boston, New York DC"
    },


    {
      id:4,
      title: ' 4 what a snap !',
      description:'Me when i was cool',
      createdDate: new Date(),
      img1Url:"https://bootdey.com/img/Content/avatar/avatar2.png",
      snaps:7
    }
    ,
     {
      id :5,
      title:'5 snap snapy',
      description:'My childhood friend',
      createdDate: new Date(),
      img1Url: "https://bootdey.com/img/Content/avatar/avatar4.png",
      snaps: 5,
      location:" Manhaten, New York DC"
    },{
     id: 6,
      title:"6 My girlFriend's snap",
      description:'Me GirlFriend',
      createdDate: new  Date(),
      img1Url:"https://bootdey.com/img/Content/avatar/avatar3.png",
      snaps:9
    }

  ]
  getAllSnaps() :FaceSnap[]{
    return this.faceSnaps;
  }
  // @ts-ignore
  getFaceSnapById (faceSnapId : number) : FaceSnap {
    const facesnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId)
    if(!facesnap){
      throw new Error('Facesnap not found');
    }else return facesnap;
  }
  uppSnapFaceById (faceSnapId : number) : void {
    const facesnap = this.getFaceSnapById(faceSnapId);
      facesnap.snaps++;
   }
  downSnapFaceById (faceSnapId : number) : void {
    const facesnap = this.getFaceSnapById(faceSnapId);
      facesnap.snaps--;

  }
}


