import { Component, OnInit } from '@angular/core';
import {FaceSnap} from "../models/FaceSnap.model";
import {FaceSnapService} from "../services/face-snap.service";

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.css']
})
export class FaceSnapListComponent implements OnInit {

  faceSnaps!: FaceSnap[];
  mySnap! : FaceSnap;
  myOtherSnap! : FaceSnap;
  myLastSnap! : FaceSnap;
  constructor(private faceSnapService : FaceSnapService  ) { }

  ngOnInit(): void {

    this.faceSnaps = this.faceSnapService.getAllSnaps();

//le code en dessous c en plus et hors la methodplogie- de travail
   /*this.mySnap = new FaceSnap(
     4,
      'what a snap !',
      'Me when i was cool',
      new Date(),
      "https://bootdey.com/img/Content/avatar/avatar2.png",
      7
    )
    // deuxiement mth
    this.myOtherSnap = {
      id :5,
      title:'My first snap',
      description:'My childhood friend',
      createdDate: new Date(),
      img1Url: "https://bootdey.com/img/Content/avatar/avatar4.png",
      snaps: 5,
      location:" Manhaten, New York DC"
    }
    this.myLastSnap = new FaceSnap(
      6,
      'My girlFriend',
      'Me GirlFriend',
      new Date(),
      "https://bootdey.com/img/Content/avatar/avatar3.png",
      9
    )*/

  }

}
