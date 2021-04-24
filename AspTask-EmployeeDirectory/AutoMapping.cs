using AutoMapper;
using AspTask_EmployeeDirectory.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AspTask_EmployeeDirectory
{
    public class AutoMapping: Profile
    {
        public AutoMapping()
        {
            CreateMap<Employee, Employee>();
        }
    }
}
