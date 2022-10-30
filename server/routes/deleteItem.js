const db    = require('../db')
const sql   = require('../db/sqlStatement')

// ************** Functions **************
const job = (req, res) => {

    // Constants and variables
    let _sql   = sql.deleteJob;
    let values =[ 
                  req.params.id
                ]

    db.transmit(_sql, values)
    .then((status) =>res.send(status))
    .catch(err=> console.log(err))
};

const company = (req, res) => {

  // Constants and variables
  let _sql   = sql.deleteCompany;
  let values =[ 
                req.params.id,
              ]

  db.transmit(_sql, values)
  .then((status) =>res.send(status))
  .catch(err=> console.log(err))
};


module.exports = {
  job,
  company,
 
}