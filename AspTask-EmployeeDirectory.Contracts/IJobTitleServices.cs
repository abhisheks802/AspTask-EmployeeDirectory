using AspTask_EmployeeDirectory.Data;
using System;
using System.Collections.Generic;
using System.Text;

namespace AspTask_EmployeeDirectory.Contracts
{
    public interface IJobTitleServices
    {
        public List<Models.JobTitle> GetJobTitles();
        public JobTitle GetJobTitle(int jobID);
        public bool AddJob(JobTitle jobTitle);
        public bool UpdateJobTitle(JobTitle jobTitle);
        public bool DeleteJobTitle(JobTitle jobTitle);

    }
}
