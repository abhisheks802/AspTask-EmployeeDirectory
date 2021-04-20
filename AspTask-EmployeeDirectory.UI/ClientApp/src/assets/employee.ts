export class Employee{
    
    firstname:string;
    lastname:string;
    preferredName:string;
    email:string;
    jobTitle:string;
    office:string;
    department:string;
    phoneNumber:number;
    skypeID:string;
    employeeID:number;

    constructor(){
        this.firstname = '';
        this.lastname ='';
        this.preferredName = '';
        this.email = '';
        this.jobTitle = '';
        this.office = '';
        this.department = '';
        this.phoneNumber = 0 ;
        this.skypeID = '';
        this.employeeID = 0;
    }

}