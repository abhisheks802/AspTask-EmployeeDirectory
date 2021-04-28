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
        private IDatabase EmployeeDatabase;
        private AutoMapper.IMapper Mapper { get; set; }
        public JobtTitleServices(AutoMapper.IMapper mapper, IDatabase employeeDatabase)
        {
            EmployeeDatabase = employeeDatabase;
            Mapper = mapper;
        }
        public List<Models.JobTitle> GetJobTitles()
        {
            var query = EmployeeDatabase.Query<JobTitle>("Select * from dbo.JobTitle").ToList();
            var modelJobList = Mapper.Map<List<JobTitle>, List<Models.JobTitle>>(query);
            return modelJobList;
        }
        public JobTitle GetJobTitle(int jobID)
        {
            var query = EmployeeDatabase.SingleOrDefault<JobTitle>("Select * from dbo.JobTitle where JobID=" + jobID);
            return query;
        }
        public bool AddJob(JobTitle jobTitle)
        {
            var job = new JobTitle { JobName = jobTitle.JobName};
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
        public bool DeleteJobTitle(JobTitle jobTitle)
        {
            EmployeeDatabase.Delete("dbo.JobTitle", "JobID", jobTitle);
            return true;
        }
    }
}
