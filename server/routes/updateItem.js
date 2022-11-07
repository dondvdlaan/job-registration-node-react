const db    = require('../db')
const sql   = require('../db/sqlStatement')

// ************** Functions **************
const job = (req, res) => {

    // Constants and variables
    let _sql   = sql.updateJob;
    let values =[ req.body.jobTitle,
                  req.body.jobDescription,
                  req.body.jobDetails,
                  req.body.jobStatus,
                  req.body.jobClosedReason,
                  req.body.jobCloseDate,
                  req.body.compID,
                  req.body.jobID
                ]

    db.transmit(_sql, values)
    .then((status) =>res.send(status))
    .catch(err=> console.log(err))
};

const company = (req, res) => {

  // Constants and variables
  let _sql   = sql.updateCompany;
  let values =[ req.body.compName,
                req.body.compType,
                req.body.compNote,
                req.body.compStatus,
                req.body.compID,
              ]

  db.transmit(_sql, values)
  .then((status) =>res.send(status))
  .catch(err=> console.log(err))
};

const employee = (req, res) => {

  // Constants and variables
  let _sql   = sql.updateEmployee;
  let values =[ req.body.emplFirstName,
                req.body.emplLastName,
                req.body.emplTel,
                req.body.emplEmail,
                req.body.emplID,
              ]

  db.transmit(_sql, values)
  .then((status) =>res.send(status))
  .catch(err=> console.log(err))
};





module.exports = {
  job,
  company,
  employee
 
}