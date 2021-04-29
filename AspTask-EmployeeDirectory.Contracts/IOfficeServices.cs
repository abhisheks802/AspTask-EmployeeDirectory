using AspTask_EmployeeDirectory.Data;
using System;
using System.Collections.Generic;
using System.Text;

namespace AspTask_EmployeeDirectory.Contracts
{
    public interface IOfficeServices
    {
        public List<Models.Office> GetOffices();
        public Office GetOffice(int officeID);
        public bool AddOffice(Office office);
        public bool UpdateOffice(Office office);
        public bool DeleteOffice(int OfficeID);
    }
}
