using AspTask_EmployeeDirectory.Data;
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
        public List<Models.Employee> Get()
        {
            var allEmployees = EmployeeServices.GetEmployees();
            return allEmployees;
        }

        [Route("GetEmployeeCard")]
        [HttpGet]
        public List<Models.EmployeeCard> GetEmployeeCard()
        {

            var allEmployees = EmployeeServices.GetEmployees();
            var allEmployeeCards = allEmployees.Select(a => new Models.EmployeeCard() { PreferredName = a.PreferredName, DepartmentID = a.DepartmentID, JobTitleID = a.JobTitleID, EmployeeID = a.EmployeeID }).ToList();
            return allEmployeeCards;
        }

        [HttpPost]
        public List<Models.Employee> Post(Employee employee)
        {

            EmployeeServices.AddEmployee(employee);
            var allEmployees = EmployeeServices.GetEmployees();
            return allEmployees;

        }
        [HttpPut]
        public List<Models.Employee> Put(Employee employee)
        {
            EmployeeServices.UpdateEmployee(employee);
            var allEmployees = EmployeeServices.GetEmployees();
            return allEmployees;
        }
        [Route("{EmployeeID}")]
        [HttpGet]
        public List<Models.Employee> Delete(int EmployeeID)
        {
            EmployeeServices.DeleteEmployee(EmployeeID);
            var allEmployees = EmployeeServices.GetEmployees();
            return allEmployees;
        }
    }
}
