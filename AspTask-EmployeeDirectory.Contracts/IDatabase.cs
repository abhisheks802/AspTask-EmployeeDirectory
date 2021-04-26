using PetaPoco;
using System;
using System.Collections.Generic;
using System.Text;

namespace AspTask_EmployeeDirectory.Contracts
{
    public interface IDatabase
    {
        Database DatabaseConnection();
    }
}
