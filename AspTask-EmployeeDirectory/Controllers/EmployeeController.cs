using AspTask_EmployeeDirectory.Data;
using AspTask_EmployeeDirectory.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace AspTask_EmployeeDirectory.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : Controller
    {
        private EmployeeServices EmployeeServices { get; set; }
        public EmployeeController()
        {
            EmployeeServices = new EmployeeServices();
        }
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(EmployeeServices.GetEmoloyees());
            }

            catch
            {
                return BadRequest("Sorry, There is an error");
            }
        }
        [HttpPost]
        public string Post(Employee employee)
        {
            try
            {
                EmployeeServices.AddEmployee(employee);
                return "Employee Added Successfully";
            }
            catch
            {
                return "Failed to Add";
            }
        }
        [HttpPut]
        public string Put(Employee employee)
        {
            try
            {
                EmployeeServices.UpdateEmployee(employee);
                return "Updated Successfully";
            }
            catch
            {
                return "Update Failed";
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
