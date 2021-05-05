﻿using AspTask_EmployeeDirectory.Data;
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
        private Database EmployeeDatabase;
        private AutoMapper.IMapper Mapper { get; set; }
        public EmployeeServices(AutoMapper.IMapper mapper, Database employeeDatabase)
        {
            EmployeeDatabase = employeeDatabase;
            Mapper = mapper;
        }
        public List<Models.Employee> GetEmployees()
        {
            var query = EmployeeDatabase.Fetch<Employee>("Select * from dbo.EmployeeDetails where EmployeeStatus='Active'");
            var modelEmployeeList = Mapper.Map<List<Employee>, List < Models.Employee >>(query);
            return modelEmployeeList;
        }
        public Employee GetEmployee(int employeeID)
        {
            var query = EmployeeDatabase.FirstOrDefault<Employee>("Select * from dbo.EmployeeDetails where EmployeeID="+employeeID);
            return query;
        }
        public bool AddEmployee(Employee employee)
        {
            var emp = new Employee { Firstname = employee.Firstname, Lastname = employee.Lastname, Email = employee.Email, DepartmentID = employee.DepartmentID, JobTitleID = employee.JobTitleID, OfficeID = employee.OfficeID, PhoneNumber = employee.PhoneNumber, SkypeID = employee.SkypeID, PreferredName = employee.PreferredName, EmployeeStatus = employee.EmployeeStatus };
            EmployeeDatabase.Insert(emp);
            return true;
        }
        public bool DeleteEmployee(int EmployeeID)
        {
            var employee = GetEmployee(EmployeeID);
            employee.EmployeeStatus = "Inactive";
            EmployeeDatabase.Update("dbo.EmployeeDetails", "EmployeeID", employee);
            return true;
        }
        public bool UpdateEmployee(Employee employee)
        {
            var oldEmployeeDetails = GetEmployee(employee.EmployeeID);
            oldEmployeeDetails = employee;
            EmployeeDatabase.Update(oldEmployeeDetails);
            return true;
        }
        
    }
}
