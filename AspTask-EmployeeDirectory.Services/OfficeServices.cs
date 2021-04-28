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
        private IDatabase EmployeeDatabase;
        private AutoMapper.IMapper Mapper { get; set; }
        public OfficeServices(AutoMapper.IMapper mapper, IDatabase employeeDatabase)
        {
            EmployeeDatabase = employeeDatabase;
            Mapper = mapper;
        }
        public List<Models.Office> GetOffices()
        {
            var query = EmployeeDatabase.Query<Office>("Select * from dbo.Office").ToList();
            var modelOfficeList = Mapper.Map<List<Office>, List<Models.Office>>(query);
            return modelOfficeList;
        }
        public Office GetOffice(int officeID)
        {
            var query = EmployeeDatabase.SingleOrDefault<Office>("Select * from dbo.Office where OfficeID=" + officeID);
            return query;
        }
        public bool AddOffice(Office office)
        {
            var ofc = new Office { OfficeName = office.OfficeName};
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
        public bool DeleteOffice(Office office)
        {
            EmployeeDatabase.Delete("dbo.Office", "OfficeID", office);
            return true;
        }
    }
}
