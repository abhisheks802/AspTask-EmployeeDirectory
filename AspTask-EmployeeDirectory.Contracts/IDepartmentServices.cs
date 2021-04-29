using AspTask_EmployeeDirectory.Data;
using System;
using System.Collections.Generic;
using System.Text;

namespace AspTask_EmployeeDirectory.Contracts
{
    public interface IDepartmentServices
    {
        public List<Models.Department> GetDepartments();
        public Department GetDepartment(int departmentID);
        public bool AddDepartment(Department department);
        public bool UpdateDepartment(Department department);
        public bool DeleteDepartment(int DepartmentID);
    }
}
