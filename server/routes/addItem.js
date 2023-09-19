const { transmitAddEmployee } = require('../db');
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
    console.log("req.body ", req.body)

    db.transmit(_sql, values)
    .then((status) =>res.send(status))
    .catch(err=> console.log(err))
};
/*
* Add new company
*/
const company = (req, res) => {

  // Constants and variables
  let _sql   = sql.addCompany;
  let values =[ req.body.compName,
                req.body.compType,
                req.body.compNote,
                req.body.compStatus,
                req.body.compFavorite
              ]

  db.transmit(_sql, values)
  .then((status) =>res.send(status))
  .catch(err=> console.log(err))
};

const employee = (req, res) => {

  // Constants and variables
  let _sql   = sql.addEmployee;
  let _sql2  = sql.addEmployee2;
  let values =[ req.body.emplFirstName,
                req.body.emplLastName,
                req.body.emplTel,
                req.body.emplEmail,
              ]
  
  console.log("req.body.compID ", req.body.compID)

  transmitAddEmployee(_sql, values, _sql2, req.body.compID )
  .then((status) =>{
    console.log("status: ", status)
    res.send(status)
  })
  .catch(err=> console.log("transmitAddEmployee: ", err))
  
};





module.exports = {
  job,
  company,
  employee
 
}