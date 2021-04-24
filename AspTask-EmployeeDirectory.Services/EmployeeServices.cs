using AspTask_EmployeeDirectory.Data;
using AutoMapper;
using PetaPoco;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AspTask_EmployeeDirectory.Services
{
    public class EmployeeServices:Contracts.IEmployeeServices
    {
        private Database employeeDatabase;
        private AutoMapper.IMapper Mapper { get; set; }
        public EmployeeServices(AutoMapper.IMapper mapper)
        {
            Mapper = mapper;
            var connection = "Server=DESKTOP-1K0UIDG\\SQLEXPRESS; Database = EmployeeDB; Trusted_Connection=True;";
            employeeDatabase = new Database(connection, "System.Data.SqlClient");
        }
        public List<Models.Employee> GetEmployees()
        {
            var query = employeeDatabase.Query<Models.Employee>("Select * from dbo.EmployeeDetails").ToList();
            return query;
        }
        public Employee GetEmployee(int employeeID)
        {
            var query = employeeDatabase.SingleOrDefault<Employee>("Select * from dbo.EmployeeDetails where EmployeeID="+employeeID);
            return query;
        }
        public bool AddEmployee(Employee employee)
        {
            var emp = new Employee { Firstname = employee.Firstname, Lastname = employee.Lastname, Email = employee.Email, Department = employee.Department, JobTitle = employee.JobTitle, Office = employee.Office, PhoneNumber = employee.PhoneNumber, SkypeID = employee.SkypeID, PreferredName = employee.PreferredName };
            employeeDatabase.Insert(emp);
            return true;
        }
        public bool DeleteEmployee(Employee employee)
        {
            employeeDatabase.Delete("dbo.EmployeeDetails", "EmployeeID", employee);
            return true;
        }
        public bool UpdateEmployee(Employee employee)
        {
            var oldEmployeeDetails = GetEmployee(employee.EmployeeID);
            Mapper.Map(employee, oldEmployeeDetails);
            employeeDatabase.Update(oldEmployeeDetails);
            return true;
        }
        
    }
}
