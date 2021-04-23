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
        public EmployeeServices()
        {
            var connection = "Server=DESKTOP-1K0UIDG\\SQLEXPRESS; Database = EmployeeDB; Trusted_Connection=True;";
            employeeDatabase = new Database(connection, "System.Data.SqlClient");
        }
        public List<Employee> GetEmployees()
        {
            var query = employeeDatabase.Query<Employee>("Select * from dbo.EmployeeDetails").ToList();
            return query;
        }
        public Employee GetEmployee(int employeeID)
        {
            var query = employeeDatabase.SingleOrDefault<Employee>("Select * from dbo.EmployeeDetails where EmployeeID="+employeeID);
            return query;
        }
        public void AddEmployee(Employee employee)
        {
            var emp = new Employee { Firstname = employee.Firstname, Lastname = employee.Lastname, Email = employee.Email, Department = employee.Department, JobTitle = employee.JobTitle, Office = employee.Office, PhoneNumber = employee.PhoneNumber, SkypeID = employee.SkypeID, PreferredName = employee.PreferredName };
            employeeDatabase.Insert(emp);

        }
        public void DeleteEmployee(Employee employee)
        {
            employeeDatabase.Delete("dbo.EmployeeDetails", "EmployeeID", employee);
        }
        public void UpdateEmployee(Employee employee)
        {
            var oldEmployeeDetails = GetEmployee(employee.EmployeeID);
            var map = new MapperConfiguration(config => config.CreateMap<Employee,Employee>());
            var mapper = map.CreateMapper();
            mapper.Map(employee, oldEmployeeDetails);
            employeeDatabase.Update(oldEmployeeDetails);
        }
    }
}
