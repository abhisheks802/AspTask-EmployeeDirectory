using System;
using System.Collections.Generic;
using System.Text;

namespace AspTask_EmployeeDirectory.Models
{
    public class Employee
    {
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string Email { get; set; }
        public string DepartmentID { get; set; }
        public string JobTitleID { get; set; }
        public string OfficeID { get; set; }
        public long PhoneNumber { get; set; }
        public string SkypeID { get; set; }
        public string PreferredName { get; set; }
        public int EmployeeID { get; set; }
    }
}
