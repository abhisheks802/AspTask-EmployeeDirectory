using AspTask_EmployeeDirectory.Data;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AspTask_EmployeeDirectory.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepartmentController : Controller
    {
        private Contracts.IDepartmentServices DepartmentServices{ get; set; }
        public DepartmentController(Contracts.IDepartmentServices departmentServices)
        {
            DepartmentServices = departmentServices;
        }

        [HttpGet]
        public List<Models.Department> Get()
        {
            var allDepartments = DepartmentServices.GetDepartments();
            return allDepartments;
        }
        [HttpPost]
        public List<Models.Department> Post(Department department)
        {

            DepartmentServices.AddDepartment(department);
            var allDepartments = DepartmentServices.GetDepartments();
            return allDepartments;

        }
        [HttpPut]
        public List<Models.Department> Put(Department department)
        {
            DepartmentServices.UpdateDepartment(department);
            var allDepartments = DepartmentServices.GetDepartments();
            return allDepartments;
        }
        [Route("{DepartmentID}")]
        [HttpDelete]
        public List<Models.Department> Delete(int DepartmentID)
        {
            var department = DepartmentServices.GetDepartment(DepartmentID);
            DepartmentServices.DeleteDepartment(department);
            var allDepartments = DepartmentServices.GetDepartments();
            return allDepartments;
        }
    }
}
