import { Component, OnInit } from '@angular/core';

import {FaceSnap} from "../models/FaceSnap.model";
import {FaceSnapService} from "../services/face-snap.service";
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.css']
})
export class SingleFaceSnapComponent implements OnInit {


  faceSnap! : FaceSnap;

  textSnap! : string;
  constructor(private faceSnapService : FaceSnapService, private route : ActivatedRoute) { }

  ngOnInit(){
    this.textSnap='Oh I snap';
    /*le + c'est pour faire le cast*/
    const idFaceSnap= +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getFaceSnapById(idFaceSnap);

  }
  toggelSnap() {
    if(this.textSnap==='Oh I snap'){

      this.faceSnapService.uppSnapFaceById(this.faceSnap.id);
      this.textSnap='Oups Unsnap';
    }
    else{ this.faceSnapService.downSnapFaceById(this.faceSnap.id);
      this.textSnap='Oh I snap';
    }


  }
}
