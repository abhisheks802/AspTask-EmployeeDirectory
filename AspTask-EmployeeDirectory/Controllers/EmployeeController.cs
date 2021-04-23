using AspTask_EmployeeDirectory.Data;
using AspTask_EmployeeDirectory.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AspTask_EmployeeDirectory.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : Controller
    {
        private Contracts.IEmployeeServices EmployeeServices { get; set; }
        public EmployeeController(Contracts.IEmployeeServices employeeServices)
        {
            EmployeeServices = employeeServices;
        }
        [HttpGet]
        public List<Data.Employee> Get()
        {
            var allEmployees = EmployeeServices.GetEmployees();
            return allEmployees;
        }

        [Route("GetEmployeeCard")]
        [HttpGet]
        public List<EmployeeCard> GetEmployeeCard()
        {

            var allEmployees = EmployeeServices.GetEmployees();
            var allEmployeeCards = allEmployees.Select(a => new EmployeeCard() { PreferredName = a.PreferredName, Department = a.Department, JobTitle = a.JobTitle, EmployeeID = a.EmployeeID }).ToList();
            return allEmployeeCards;
        }

        [HttpPost]
        public List<Data.Employee> Post(Data.Employee employee)
        {

            EmployeeServices.AddEmployee(employee);
            var allEmployees = EmployeeServices.GetEmployees();
            return allEmployees;

        }
        [HttpPut]
        public List<Data.Employee> Put(Data.Employee employee)
        {

            EmployeeServices.UpdateEmployee(employee);
            var allEmployees = EmployeeServices.GetEmployees();
            return allEmployees;

        }
        [Route("{EmployeeID}")]
        [HttpDelete]
        public List<Data.Employee> Delete(int EmployeeID)
        {

            var employee = EmployeeServices.GetEmployee(EmployeeID);
            EmployeeServices.DeleteEmployee(employee);
            var allEmployees = EmployeeServices.GetEmployees();
            return allEmployees;


        }
    }
}
