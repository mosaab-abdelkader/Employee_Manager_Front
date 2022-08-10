import {Component, Input, OnInit} from '@angular/core';
import {FaceSnap} from "../models/FaceSnap.model";
import {FaceSnapService} from "../services/face-snap.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.css']
})
export class FaceSnapComponent implements OnInit {

  @Input() faceSnap! : FaceSnap;

  /*
    title : string | undefined;
    description! : string;
    createdDate! : Date;
    snaps! :number;
    img1Url! :string;
    img2Url! :string;*/

  textSnap! : string;
  constructor(private router : Router, private faceSnapService : FaceSnapService

              ) { }

  ngOnInit(){
    this.textSnap='Oh I snap';
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

  onView() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
