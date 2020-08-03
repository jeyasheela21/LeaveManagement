using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Validation;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Cryptography.X509Certificates;
using System.Web.Http;
using System.Web.UI.WebControls;
using LeaveDetailManagement.Models;
namespace LeaveDetailManagement.Controllers
{
    public class LeaveApiController : ApiController
    {
        // GET api/LeaveApi
        LeavesManagementDBEntities1 lm = new LeavesManagementDBEntities1();
        public IHttpActionResult getemp()
        {

            var results = lm.Leavedetails.ToList();
            return Ok(results);
        }

        // GET api/LeaveApi/5
        public IHttpActionResult Getempid(int id)
        {
            leavedetail empdetails = null;
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
            empdetails = lm.Leavedetails.Find(id);

            if (empdetails == null)
            {
                return NotFound();

            }
            return Ok(empdetails);
        }

        // POST api/LeaveApi
        public IHttpActionResult empinsert(leavedetail empinsert)
        {
            lm.Leavedetails.Add(empinsert);
            lm.SaveChanges();
            
            return Ok(lm);

        }
        // PUT api/LeaveApi/5
        public IHttpActionResult put(leavedetail emp)
        {
            //var updateemp = lm.Leavedetails.Where(x => x.empid == emp.empid).FirstOrDefault<leavedetail>();
            //if (updateemp != null)
            //{
            //    //updateemp.empid = emp.empid;
            //    //updateemp.EmployeeName = emp.EmployeeName;
            //    //updateemp.RoleID = emp.RoleID;
            //    //updateemp.UserName = emp.UserName;
            //    //updateemp.Password = emp.Password;
            //    updateemp.status = emp.status;
            //    lm.SaveChanges();

            //}
            //else
         
            try
            {
                var up = lm.Leavedetails.Where(x => x.status == emp.status).SingleOrDefault<leavedetail>();
                //lm.Entry(emp).State = System.Data.Entity.EntityState.Modified;
                up.status = emp.status;
                lm.SaveChanges();

            }
            catch (DbEntityValidationException e)
            {
                foreach (var eve in e.EntityValidationErrors)
                {
                    Console.WriteLine("Entity of type \"{0}\" in state \"{1}\" has the following validation errors:",
                        eve.Entry.Entity.GetType().Name, eve.Entry.State);
                    foreach (var ve in eve.ValidationErrors)
                    {
                        Console.WriteLine("- Property: \"{0}\", Error: \"{1}\"",
                            ve.PropertyName, ve.ErrorMessage);
                    }
                }
                throw ;
            }
            return Ok(lm);
        }

        // DELETE api/LeaveApi/5
        public void Delete(int id)
        {
        }

    }
}
