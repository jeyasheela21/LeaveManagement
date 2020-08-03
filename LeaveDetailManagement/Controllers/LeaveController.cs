using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using LeaveDetailManagement.Models;
using System.Net.Http;
namespace LeaveDetailManagement.Controllers
{
    public class LeaveController : Controller
    {
        // GET: Leave
        public ActionResult Index()
        {
            IEnumerable<leavedetail> empobj = null;
            HttpClient hc = new HttpClient();
            hc.BaseAddress = new Uri("https://localhost:44324/api/LeaveApi");
            var consumeapi = hc.GetAsync("LeaveApi");
            consumeapi.Wait();
            var readdata = consumeapi.Result;
            if (readdata.IsSuccessStatusCode)
            {
                var displaydata = readdata.Content.ReadAsAsync<List<leavedetail>>();
                displaydata.Wait();
                empobj = displaydata.Result;

            }
            return View(empobj);
        }
        //public ActionResult Create()
        //{
        //    return View();
        //}
        //[HttpPost]
        //public ActionResult Create(leavedetail insertemp)
        //{
        //    HttpClient hc = new HttpClient();
        //    hc.BaseAddress = new Uri("https://localhost:44324/api/LeaveApi");
        //    var insertrecord = hc.PostAsJsonAsync<leavedetail>("LeaveApi", insertemp);
        //    insertrecord.Wait();
        //    var savedata = insertrecord.Result;
        //    if (savedata.IsSuccessStatusCode)
        //    {
        //        return RedirectToAction("Index");

        //    }
        //    return View("Create");
        //}
        // GET: Leave/Details/5
        //public ActionResult Details(int id)
        //{
           
        //        leavedetail empobj = null;
        //        HttpClient hc = new HttpClient();
        //        hc.BaseAddress = new Uri("https://localhost:44324/api/");
        //        var consumeapi = hc.GetAsync("LeaveApi?id=" + id.ToString());
        //        consumeapi.Wait();
        //        var readdata = consumeapi.Result;
        //        if (readdata.IsSuccessStatusCode)
        //        {
        //            var displaydata = readdata.Content.ReadAsAsync<leavedetail>();
        //            displaydata.Wait();
        //            empobj = displaydata.Result;
        //        }
        //        return View(empobj);
        //    }

        


        //public ActionResult Create()
        //{
        //    return View();
        //}

        //// POST: Leave/Create
        //[HttpPost]
        //public ActionResult Create(FormCollection collection)
        //{
        //    try
        //    {
        //        // TODO: Add insert logic here

        //        return RedirectToAction("Index");
        //    }
        //    catch
        //    {
        //        return View();
        //    }
        //}

        // GET: Leave/Edit/5
        public ActionResult Edit(int id)
        
            {
            leavedetail empobj = null;
            HttpClient hc = new HttpClient();
            hc.BaseAddress = new Uri("https://localhost:44324/api/");
            var consumeapi = hc.GetAsync("LeaveApi?id=" + id.ToString());
            consumeapi.Wait();
            var readdata = consumeapi.Result;
            if (readdata.IsSuccessStatusCode)
            {
                var displaydata = readdata.Content.ReadAsAsync<leavedetail>();
                displaydata.Wait();
                empobj = displaydata.Result;
            }
            return View(empobj);
        }

        // PUT: Leave/Edit/5
       [HttpPost]
     
        public ActionResult Edit(leavedetail emp)
        {
            try
            {
                // TODO: Add update logic here

                HttpClient hc = new HttpClient();
                hc.BaseAddress = new Uri("https://localhost:44324/api/");
                var insertrecord = hc.PutAsJsonAsync<leavedetail>("LeaveApi", emp);

                insertrecord.Wait();
                var savedata = insertrecord.Result;
                if (savedata.IsSuccessStatusCode)
                {
                    return RedirectToAction("Index");


                }
                else
                {
                    ViewBag.message("record updated");
                }
                return View("Index");
            }
            catch
            {
                return View("Index");
            }
        }

        // GET: Leave/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Leave/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
      
    }
}
