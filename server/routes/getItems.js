const db    = require('../db')
const sql   = require('../db/sqlStatement')

// ************** Functions **************
/**
 * GET all Companies or all Jobs
 */
const all = (req, res) => {

    // Constants and variables
    let _sql    = "";
    
    switch(req.originalUrl) {
      case '/allCompanies': _sql = sql.allCompanies;
        break;
      case '/partners'    : _sql = sql.partners;
        break;
      case '/allJobs'     : _sql = sql.allJobs;
        break;
      case '/activeJobs'  : _sql = sql.activeJobs;
        break;
      case '/lostJobs'    : _sql = sql.lostJobs;
        break;  
      default:
        console.log("No such option")
    } 
    
    db.transmit(_sql)
    .then(items =>{
      res.send(items)})
    .catch(err=> console.log(err))
};

/**
 * GET Job by ID
 */
const jobByID = (req, res) => 
{
    const _sql    = sql.jobByID;
    const values  = [req.params.id,
                    req.params.id];

    db.transmit(_sql, values)
    .then(job=> {
      console.log("job[0]: ", job[0]);
      res.send(job[0])})
    .catch(err=> console.log(err))
};

/**
 * GET Company by ID
 */
const companyByID = (req, res) => 
{
    const _sql    = sql.companyByID;
    const values  = req.params.id;

    db.transmit(_sql, values)
    .then(comp=> res.send(comp))
    .catch(err=> console.log(err))
};

/**
 * GET Employee by Employee ID
 */
const employeeByID = (req, res) => 
{
    const _sql    = sql.employeeByID;
    const values  = req.params.id;

    db.transmit(_sql, values)
    .then(comp=> res.send(comp))
    .catch(err=> console.log(err))
};

/**
 * GET Employees of Company by Company ID
 */
 const employeesCompanyByID = (req, res) => 
 {
     const _sql    = sql.employeesCompanyByID;
     const values  = req.params.id;
 
     db.transmit(_sql, values)
     .then(comp=> {
      console.log("comp:  ", comp)
      res.send(comp)})
     .catch(err=> console.log(err))
 };

 /**
 * GET Employees of Company by Company ID
 */
 const jobsPerCompany = (req, res) => 
 {
     const _sql    = sql.jobsPerCompany;
     const values  = req.params.id;
 
     db.transmit(_sql, values)
     .then(comp=> {
      console.log("comp:  ", comp)
      res.send(comp)})
     .catch(err=> console.log(err))
 };

 
module.exports = {
  all,
  jobByID,
  companyByID,
  employeeByID,
  employeesCompanyByID,
  jobsPerCompany
}