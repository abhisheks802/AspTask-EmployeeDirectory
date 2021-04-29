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
    public class JobTitleController : Controller
    {
        private Contracts.IJobTitleServices JobTitleServices { get; set; }
        public JobTitleController(Contracts.IJobTitleServices jobTitleServices)
        {
            JobTitleServices = jobTitleServices;
        }
        [HttpGet]
        public List<Models.JobTitle> Get()
        {
            var allJobTitles = JobTitleServices.GetJobTitles();
            return allJobTitles;
        }
        [HttpPost]
        public List<Models.JobTitle> Post(JobTitle jobTitle)
        {

            JobTitleServices.AddJob(jobTitle);
            var allJobTitles = JobTitleServices.GetJobTitles();
            return allJobTitles;

        }
        [HttpPut]
        public List<Models.JobTitle> Put(JobTitle jobTitle)
        {
            JobTitleServices.UpdateJobTitle(jobTitle);
            var allJobTitles = JobTitleServices.GetJobTitles();
            return allJobTitles;
        }
        [Route("{JobID}")]
        [HttpGet]
        public List<Models.JobTitle> Delete(int JobID)
        {
            JobTitleServices.DeleteJobTitle(JobID);
            var allJobTitles = JobTitleServices.GetJobTitles();
            return allJobTitles;
        }
    }
}
