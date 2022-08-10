import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "../models/employee";
import {environment} from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private serveurUrl =environment.apiBaseUrl;
  constructor(private http: HttpClient) {
    }

  // @ts-ignore
  public getEmployees(): Observable<Employee[]>{

    return this.http.get<Employee[]>(`${this.serveurUrl}/employee/all`);

  }
  public getEmployeeImg(fileName : string): Observable<Employee[]>{
      let Allelements  = fileName.split("//");
    let words = Allelements[1].split("/");
    let employeeImg : string = words[4].substring(0, words[4].lastIndexOf(".")+4).trim();

    return this.http.get<Employee[]>(`${this.serveurUrl}/employee/getImg/${employeeImg}`);

  }
  public addEmployee( employee : Employee): Observable<Employee>{

    return this.http.post<Employee>(`${this.serveurUrl}/employee/add`,employee);
  }

  public updateEmployee( employee : Employee): Observable<Employee>{

    return this.http.put<Employee>(`${this.serveurUrl}/employee/update`,employee);
  }
  public deleteEmployee( employeeId : number): Observable<void>{

    return this.http.delete<void>(`${this.serveurUrl}/employee/delete/${employeeId}`);
  }

}
