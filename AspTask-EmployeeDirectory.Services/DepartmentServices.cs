using AspTask_EmployeeDirectory.Data;
using AutoMapper;
using PetaPoco;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AspTask_EmployeeDirectory.Services
{
    public class DepartmentServices: Contracts.IDepartmentServices
    {
        private Database EmployeeDatabase;
        private AutoMapper.IMapper Mapper { get; set; }
        public DepartmentServices(AutoMapper.IMapper mapper, Database employeeDatabase)
        {
            EmployeeDatabase = employeeDatabase;
            Mapper = mapper;
        }
        public List<Models.Department> GetDepartments()
        {
            var query = EmployeeDatabase.Fetch<Department>("Select * from dbo.Department where DepartmentStatus='Active'");
            var modelDepartmentList = Mapper.Map<List<Department>, List<Models.Department>>(query);
            return modelDepartmentList;
        }
        public Department GetDepartment(int departmentID)
        {
            var query = EmployeeDatabase.FirstOrDefault<Department>("Select * from dbo.Department where DepartmentID=" + departmentID);
            return query;
        }
        public bool AddDepartment(Department department)
        {
            var dep = new Department { DepartmentName = department.DepartmentName, DepartmentStatus = department.DepartmentStatus };
            EmployeeDatabase.Insert("dbo.Department",dep);
            return true;
        }
        public bool UpdateDepartment(Department department)
        {
            var oldDepartmentDetails = GetDepartment(department.DepartmentID);
            oldDepartmentDetails = department;
            EmployeeDatabase.Update("dbo.Department", "DepartmentID",oldDepartmentDetails);
            return true;
        }
        public bool DeleteDepartment(int DepartmentID)
        {
            var department = GetDepartment(DepartmentID);
            department.DepartmentStatus = "Inactive";
            EmployeeDatabase.Update("dbo.Department", "DepartmentID", department);
            return true;
        }
    }
}
