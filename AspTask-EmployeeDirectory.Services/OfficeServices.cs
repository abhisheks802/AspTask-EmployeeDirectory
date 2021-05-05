using AspTask_EmployeeDirectory.Data;
using PetaPoco;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AspTask_EmployeeDirectory.Services
{
    public class OfficeServices:Contracts.IOfficeServices
    {
        private Database EmployeeDatabase;
        private AutoMapper.IMapper Mapper { get; set; }
        public OfficeServices(AutoMapper.IMapper mapper, Database employeeDatabase)
        {
            EmployeeDatabase = employeeDatabase;
            Mapper = mapper;
        }
        public List<Models.Office> GetOffices()
        {
            var query = EmployeeDatabase.Fetch<Office>("Select * from dbo.Office where OfficeStatus='Active'");
            var modelOfficeList = Mapper.Map<List<Office>, List<Models.Office>>(query);
            return modelOfficeList;
        }
        public Office GetOffice(int officeID)
        {
            var query = EmployeeDatabase.FirstOrDefault<Office>("Select * from dbo.Office where OfficeID=" + officeID);
            return query;
        }
        public bool AddOffice(Office office)
        {
            var ofc = new Office { OfficeName = office.OfficeName, OfficeStatus = office.OfficeStatus};
            EmployeeDatabase.Insert("dbo.Office", ofc);
            return true;
        }
        public bool UpdateOffice(Office office)
        {
            var oldOfficeDetails = GetOffice(office.OfficeID);
            oldOfficeDetails = office;
            EmployeeDatabase.Update("dbo.Office", "OfficeID", oldOfficeDetails);
            return true;
        }
        public bool DeleteOffice(int officeID)
        {
            var office = GetOffice(officeID);
            office.OfficeStatus = "Inactive";
            EmployeeDatabase.Update("dbo.Office", "OfficeID", office);
            return true;
        }
    }
}
