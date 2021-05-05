export class Employee{
    
    firstname:string;
    lastname:string;
    preferredName:string;
    email:string;
    jobTitleID:number;
    officeID:number;
    departmentID:number;
    phoneNumber:number;
    skypeID:string;
    employeeID:number;
    employeeStatus:string;

    constructor(){
        this.firstname = '';
        this.lastname ='';
        this.preferredName = '';
        this.email = '';
        this.jobTitleID = 0;
        this.officeID = 0;
        this.departmentID = 0;
        this.phoneNumber = 0 ;
        this.skypeID = '';
        this.employeeID = 0;
        this.employeeStatus = '';
    }

}