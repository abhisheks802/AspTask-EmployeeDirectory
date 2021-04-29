using AspTask_EmployeeDirectory.Data;
using System;
using System.Collections.Generic;
using System.Text;

namespace AspTask_EmployeeDirectory.Contracts
{
    public interface IEmployeeServices
    {
        public List<Models.Employee> GetEmployees();
        public Employee GetEmployee(int employeeID);
        public bool AddEmployee(Employee employee);
        public bool DeleteEmployee(int EmployeeID);
        public bool UpdateEmployee(Employee employee);
    }
}
