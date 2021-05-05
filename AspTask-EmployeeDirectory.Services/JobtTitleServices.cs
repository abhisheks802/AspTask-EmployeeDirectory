using AspTask_EmployeeDirectory.Data;
using PetaPoco;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AspTask_EmployeeDirectory.Services
{
    public class JobtTitleServices:Contracts.IJobTitleServices
    {
        private Database EmployeeDatabase;
        private AutoMapper.IMapper Mapper { get; set; }
        public JobtTitleServices(AutoMapper.IMapper mapper, Database employeeDatabase)
        {
            EmployeeDatabase = employeeDatabase;
            Mapper = mapper;
        }
        public List<Models.JobTitle> GetJobTitles()
        {
            var query = EmployeeDatabase.Fetch<JobTitle>("Select * from dbo.JobTitle where JobStatus='Active'");
            var modelJobList = Mapper.Map<List<JobTitle>, List<Models.JobTitle>>(query);
            return modelJobList;
        }
        public JobTitle GetJobTitle(int jobID)
        {
            var query = EmployeeDatabase.FirstOrDefault<JobTitle>("Select * from dbo.JobTitle where JobID=" + jobID);
            return query;
        }
        public bool AddJob(JobTitle jobTitle)
        {
            var job = new JobTitle { JobName = jobTitle.JobName, JobStatus=jobTitle.JobStatus};
            EmployeeDatabase.Insert("dbo.JobTitle", job);
            return true;
        }
        public bool UpdateJobTitle(JobTitle jobTitle)
        {
            var oldJobDetails = GetJobTitle(jobTitle.JobID);
            oldJobDetails = jobTitle;
            EmployeeDatabase.Update("dbo.JobTitle", "JobID", oldJobDetails);
            return true;
        }
        public bool DeleteJobTitle(int JobID)
        {
            var job = GetJobTitle(JobID);
            job.JobStatus = "Inactive";
            EmployeeDatabase.Update("dbo.JobTitle", "JobID", job);
            return true;
        }
    }
}
