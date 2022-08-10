import { Component, OnInit } from '@angular/core';
import {Employee} from "../models/employee";
import {HttpErrorResponse} from "@angular/common/http";
import {EmployeeService} from "../services/employee.service";
import {NgForm} from "@angular/forms";
import {stringify} from "@angular/compiler/src/util";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public empl! :Employee;

  public deleteEmployee! : Employee;
  public editEmployee! : Employee;
  public employees!: Employee[] ;
  constructor(private employeeService : EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
   // console.log(this.getImageNumber("https://www.bootdey.com/img/Content/avatar535672.jpg"));
  }

  public getEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (response:Employee[])=>{
        this.employees=response;
        console.log(this.employees)
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }

    )
  }

  getEmployeesImage(file : string) : void{
    this.employeeService.getEmployeeImg(file).subscribe(
      (response: any)=>{
        console.log(response)
      },error => {
        alert(error.message("img not found"));
      }
    )
  }
  getImageNumber(url :string) : number{
  var splitted= url.split(".png");
 var index = splitted.length
  return parseInt(splitted[0][index-1]);
  }
  public onOpenModal(employee: Employee, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addEmployeeModal');
    }
    if (mode === 'edit') {
      this.editEmployee = employee;
      button.setAttribute('data-target', '#updateEmployeeModal');
    }
    if (mode === 'delete') {
      this.deleteEmployee = employee;
      button.setAttribute('data-target', '#deleteEmployeeModal');
    }

    container?.appendChild(button);
    button.click();
  }

  public onAddEmloyee(addform : NgForm) {
    this.employeeService.addEmployee(addform.value).subscribe(
      (response: Employee)=>{
        console.log(response);
        this.getEmployees();
        addform.reset();
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    );
     // @ts-ignore
    document.getElementById("add-employee-form").click();

  }

  public onUpdateEmloyee(employee: Employee): void {
    this.employeeService.updateEmployee(employee).subscribe(
      (response: Employee) => {
        console.log(response);
        this.getEmployees();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteEmloyee(employeeId: number): void {
    this.employeeService.deleteEmployee(employeeId).subscribe(
      (response: void) => {
        console.log(response);
        this.getEmployees();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public searchEmployees(key: string): void {
    console.log(key);
    const results: Employee[] = [];
    for (const employee of this.employees) {
      if (employee.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || employee.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || employee.phone.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || employee.jobTitle.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(employee);
      }
    }
    this.employees = results;
    if (results.length === 0 || !key) {
      this.getEmployees();
    }
  }

}
