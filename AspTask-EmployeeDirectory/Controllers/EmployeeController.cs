using AspTask_EmployeeDirectory.Data;
using AspTask_EmployeeDirectory.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
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
        public IActionResult Get()
        {
            try
            {
                return Ok(EmployeeServices.GetEmployees());
            }

            catch
            {
                return BadRequest("Sorry, There is an error");
            }
        }
        [Route("GetEmployeeCard")]
        [HttpGet]
        public IActionResult GetEmployeeCard()
        {
            try
            {
                var allEmployees = EmployeeServices.GetEmployees();
                var allEmployeeCards = allEmployees.Select(a => new EmployeeCard() { PreferredName = a.PreferredName, Department = a.Department, JobTitle = a.JobTitle, EmployeeID = a.EmployeeID}).ToList();
                return Ok(allEmployeeCards);
            }

            catch
            {
                return BadRequest("Sorry, There is an error");
            }
        }
        [HttpPost]
        public IActionResult Post(Data.Employee employee)
        {
            try
            {
                EmployeeServices.AddEmployee(employee);
                return Ok("Employee Added Successfully");
            }
            catch
            {
                return BadRequest("Failed to Add");
            }
        }
        [HttpPut]
        public IActionResult Put(Data.Employee employee)
        {
            try
            {
                EmployeeServices.UpdateEmployee(employee);
                return Ok("Updated Successfully");
            }
            catch
            {
                return BadRequest("Update Failed");
            }
        }
        [Route("{EmployeeID}")]
        [HttpDelete]
        public string Delete(int EmployeeID)
        {
            try
            {
                var employee = EmployeeServices.GetEmployee(EmployeeID);
                if(employee != null)
                {
                    EmployeeServices.DeleteEmployee(employee);
                    return "Deleted Successfully";
                }
                else
                {
                    return "This employee does not exist";
                }
            }
            catch
            {
                return "There was a problem in deleting";
            }
        }
    }
}
