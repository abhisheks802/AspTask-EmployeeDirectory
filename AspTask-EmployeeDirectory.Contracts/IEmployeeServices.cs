using AspTask_EmployeeDirectory.Data;
using System;
using System.Collections.Generic;
using System.Text;

namespace AspTask_EmployeeDirectory.Contracts
{
    public interface IEmployeeServices
    {
        public List<Employee> GetEmployees();
        public Employee GetEmployee(int employeeID);
        public void AddEmployee(Employee employee);
        public void DeleteEmployee(Employee employee);
        public void UpdateEmployee(Employee employee);
    }
}
