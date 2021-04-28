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
    public class OfficeController : Controller
    {
        private Contracts.IOfficeServices OfficeServices { get; set; }
        public OfficeController(Contracts.IOfficeServices officeServices)
        {
            OfficeServices = officeServices;
        }
        [HttpGet]
        public List<Models.Office> Get()
        {
            var allOffices = OfficeServices.GetOffices();
            return allOffices;
        }
        [HttpPost]
        public List<Models.Office> Post(Office office)
        {

            OfficeServices.AddOffice(office);
            var allOffices = OfficeServices.GetOffices();
            return allOffices;

        }
        [HttpPut]
        public List<Models.Office> Put(Office office)
        {
            OfficeServices.UpdateOffice(office);
            var allOffices = OfficeServices.GetOffices();
            return allOffices;
        }
        [Route("{OfficeID}")]
        [HttpDelete]
        public List<Models.Office> Delete(int OfficeID)
        {
            var office = OfficeServices.GetOffice(OfficeID);
            OfficeServices.DeleteOffice(office);
            var allOffices = OfficeServices.GetOffices();
            return allOffices;
        }
    }
}
