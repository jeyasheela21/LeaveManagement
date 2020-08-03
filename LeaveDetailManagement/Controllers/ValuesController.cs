using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;
using LeaveDetailManagement.Models;
namespace LeaveDetailManagement.Controllers
{
    public class ValuesController : ApiController
    {

        // GET api/values
        LeavesManagementDBEntities lm = new LeavesManagementDBEntities();
        public IHttpActionResult getemp()
        {

            var results = lm.Employees.ToList();
            return Ok(results);
        }


        // GET api/values/5
        // public IHttpActionResult Getempid(Employee empsearch)
        //{

        //Employee empdetails = empsearch;
        //empdetails = lm.Employees.Where(x=> ).Select(x => new Employee()
        //{
        //    Id = x.Id,
        //    EmployeeName = x.EmployeeName,
        //    RoleID = x.RoleID,
        //    UserName = x.UserName,
        //    Password = x.Password,
        //    MailId = x.MailId,
        //    PhoneNumber = x.PhoneNumber


        //}).FirstOrDefault<Employee>();
        //     empdetails = lm.Employees.Find(empsearch);

        //     if (empdetails == null)
        //     {
        //         return NotFound();

        //    }
        //    return Ok(empdetails);
        //}

        //// POST api/values
        //public IHttpActionResult empinsert(Employee empinsert)
        //{
        //    lm.Employees.Add(empinsert);
        //    lm.SaveChanges();
        //    return Ok(lm);

        //}

        //// PUT api/values/5
        //public IHttpActionResult Put(int id, Employee emp)
        //{
        //    //var updateemp = lm.Employees.Where(x => x.Id == emp.Id).FirstOrDefault<Employee>();
        //    //if (updateemp != null)
        //    //{
        //    //    updateemp.Id = emp.Id;
        //    //    updateemp.EmployeeName = emp.EmployeeName;
        //    //    updateemp.RoleID = emp.RoleID;
        //    //    updateemp.UserName = emp.UserName;
        //    //    updateemp.Password = emp.Password;
        //    //    updateemp.MailId = emp.MailId;
        //    //    lm.SaveChanges();

        //    //}
        //    //else
        //    //{
        //    //    return NotFound();

        //    //}
        //    if (id == emp.Id)
        //    {
        //        lm.Entry(emp).State = System.Data.Entity.EntityState.Modified;
        //        lm.SaveChanges();
        //    }
        //    return Ok(lm);
        //}

        //// DELETE api/values/5
        //public void Delete(int id)
        //{
        //}
    }
}


