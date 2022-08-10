import {Component, OnInit} from '@angular/core';
import {Employee} from "./models/employee";
import {EmployeeService} from "./services/employee.service";
import {HttpErrorResponse} from "@angular/common/http";
import {FaceSnap} from "./models/FaceSnap.model";
import {concatMap, delay, filter, interval, mergeMap, Observable, of, take, tap} from "rxjs";
import {map} from "rxjs/operators"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  public employees : Employee[] | undefined;

  interval$! : Observable<string>;


  constructor(private employeeService :EmployeeService) {}

  redTrainsCalled = 0;
  yellowTrainsCalled = 0;

  ngOnInit() {
    // case d-observable
   /* interval(500).pipe(
      take(10),
      map(value => value % 2 === 0 ? 'rouge' : 'vert'),
      tap(color => console.log(`La lumière s'allume en %c${color}`, `color: ${this.translateColor(color)}`)),
      concatMap(color => this.getTrainObservable$(color)),
      tap(train => console.log(`Train %c${train.color} ${train.trainIndex} arrivé !`, `font-weight: bold; color: ${this.translateColor(train.color)}`))
    ).subscribe();*/
    //2sd comment
     /*  this.interval$ = interval(1000).pipe(
          filter(value => value % 3 ===0),
          map(value=> value % 2 ===0 ?`I'm ${value} &  et je suis pais` :
                        `je suis ${value} et je suis impair`
          ),tap(text => this.logger((text.toUpperCase())))
        );*/
  // 1st comment
       // interval$.subscribe(value => console.log(value));
      //  tanque on a pas souscrie a l'observable il n'emis rien
      //  souscrie pleuseur fois ==> pleusieurs instances de cette intervable
      //  setTimeout(()=>interval$.subscribe(value => console.log(value)),3000);
      //
      this.getEmployees();
    }


  logger (text : string){
    console.log(`Log : ${text}`)
  }
  public getEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (response:Employee[])=>{
        this.employees=response;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }

    )
  }

   getTrainObservable$(color: 'rouge'|'vert') {
    const isRedTrain = color === 'rouge';
    isRedTrain ? this.redTrainsCalled++ : this.yellowTrainsCalled++;
    const trainIndex = isRedTrain ? this.redTrainsCalled : this.yellowTrainsCalled;
    console.log(`Train %c${color} ${trainIndex} appelé !`, `text-decoration: underline; color: ${this.translateColor(color)}`);
    return of({ color, trainIndex }).pipe(
      delay(isRedTrain ? 5000 : 6000)
    );
  }

   translateColor(color: 'rouge'|'vert') {
     return color === 'rouge' ? 'red' : 'green';
  }
}
