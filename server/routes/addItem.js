const db    = require('../db')
const sql   = require('../db/sqlStatement')

// ************** Functions **************
const job = (req, res) => {

    // Constants and variables
    let _sql   = sql.addJob;
    let values =[ req.body.jobTitle,
                  req.body.jobDescription,
                  req.body.jobDetails,
                  req.body.jobStatus,
                  req.body.jobNote,
                  req.body.jobContract,
                  req.body.compID,
                  req.body.emplID
                ]
    
    db.transmit(_sql, values)
    .then((status) =>res.send(status))
    .catch(err=> console.log(err))
};

const company = (req, res) => {

  // Constants and variables
  let _sql   = sql.addCompany;
  let values =[ req.body.compName,
                req.body.compType,
                req.body.compNote,
                req.body.compStatus,
              ]

  db.transmit(_sql, values)
  .then((status) =>res.send(status))
  .catch(err=> console.log(err))
};

const employee = (req, res) => {

  // Constants and variables
  let _sql   = sql.addEmployee;
  let values =[ req.body.emplFirstName,
                req.body.emplLastName,
                req.body.emplTel,
                req.body.emplEmail,
                req.body.compID,
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