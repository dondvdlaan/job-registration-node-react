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
      case '/allJobs'     : _sql = sql.allJobs;
        break;
      default:
        console.log("No such option")
    } 
    
    db.transmit(_sql)
    .then(items =>res.send(items))
    .catch(err=> console.log(err))
};

/**
 * GET Job by ID
 */
const jobByID = (req, res) => 
{
    const _sql    = sql.jobByID;
    const values  = req.params.id;

    db.transmit(_sql, values)
    .then(job=> res.send(job))
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

module.exports = {
  all,
  jobByID,
  companyByID
}