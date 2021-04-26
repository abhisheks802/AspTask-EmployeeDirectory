using PetaPoco;
using System;
using System.Collections.Generic;
using System.Text;

namespace AspTask_EmployeeDirectory.Services
{
    public class DatabaseServices:Contracts.IDatabase
    {
        private Database employeeDatabase;
        public Database DatabaseConnection()
        {
            var connection = "Server=DESKTOP-1K0UIDG\\SQLEXPRESS; Database = EmployeeDB; Trusted_Connection=True;";
            employeeDatabase = new Database(connection, "System.Data.SqlClient");
            return employeeDatabase;
        }
    }
}
