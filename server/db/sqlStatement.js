module.exports = {
  allJobs       : 'SELECT * FROM jobs ' +
                  'JOIN companies USING(compID)' +
                  'ORDER BY jobTitle',

  activeJobs    : 'SELECT * FROM jobs, companies ' +
                  'WHERE jobs.jobStatus != "Closed Lost" ' +
                  'AND jobs.compID = companies.compID',
    
  lostJobs      : 'SELECT * FROM jobs, companies ' +
                  'WHERE jobs.jobStatus = "Closed Lost" ' +
                  'AND jobs.compID = companies.compID',                  
                  
  allCompanies  : 'SELECT * FROM companies ' +
                  // 'LEFT JOIN employees USING(compID)' +
                  'ORDER BY compName',

  partners      : 'SELECT * FROM companies ' +
                  'WHERE companies.compType = "Partner" ' +
                  'ORDER BY compName',
    
  jobByID       : 'SELECT * FROM jobs '+
                  'INNER JOIN companies USING(compID) '+
                  'LEFT JOIN employees USING(compID) '+
                  'WHERE jobID = ?',

  companyByID   : 'SELECT * FROM companies left JOIN employees USING(compID) where compID = ?',

  employeesCompanyByID   : 'SELECT * FROM employees ' +
                           'WHERE compID = ? ' +
                           'ORDER BY emplLastName',

  deleteCompany : 'DELETE c, j, e ' +
                  'FROM companies c ' +
                  'INNER JOIN jobs j USING(compID) ' +
                  'INNER JOIN employees e USING(compID) ' +
                  'where compID = ?',

  deleteJob     : 'DELETE FROM jobs where jobID = ?',

  addJob        : 'INSERT INTO jobs' +
                  '(jobTitle, jobDescription, jobDetails, jobStatus, jobNote, jobContract, compID, emplID)' +
                  'VALUES(?,?,?,?,?,?,?,?)',

  addCompany    : 'INSERT INTO companies(	compName, compType, compNote, compStatus) VALUES(?,?,?,?)',

  addEmployee   : 'INSERT INTO employees' +
                  '(emplFirstName, emplLastName, emplTel, emplEmail,  compID)' +
                  'VALUES(?,?,?,?,?)',

  updateCompany : 'UPDATE companies SET compName = ?, compType = ?, compNote = ?, compStatus = ? WHERE compID = ?',

  updateJob     : 'UPDATE jobs SET' +
                  ' jobTitle = ?, jobDescription	=	?, jobDetails	=	?, jobStatus = ?, jobNote = ?, jobContract = ?, jobClosedReason = ?, jobCloseDate = ?, compID = ?' +
                  ' WHERE jobID = ?',

  updateEmployee: 'UPDATE employees SET emplFirstName = ?, emplLastName = ?, emplTel = ?, emplEmail = ? WHERE emplID = ?'
}