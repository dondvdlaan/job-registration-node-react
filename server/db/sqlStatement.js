module.exports = {
  allJobs       : 'SELECT * FROM jobs ' +
                  'JOIN companies USING(compID) ' +
                  'ORDER BY jobDate ASC',

  activeJobs    : 'SELECT * FROM jobs, companies ' +
                  'WHERE jobs.jobStatus != "Closed Lost" ' +
                  'AND jobs.compID = companies.compID ' +
                  'ORDER BY jobs.jobDate DESC' ,

  lostJobs      : 'SELECT * FROM jobs, companies ' +
                  'WHERE jobs.jobStatus = "Closed Lost" ' +
                  'AND jobs.compID = companies.compID '+
                  'ORDER BY jobs.jobDate DESC' ,                  
                  
  allCompanies  : 'SELECT * FROM companies ' +
                  'ORDER BY compName ' ,

  partners      : 'SELECT * FROM companies ' +
                  'WHERE companies.compType = "Partner" ' +
                  'ORDER BY compName',
    
  jobByID       : 'SELECT * FROM jobs ' + 
                  'JOIN companies USING(compID) ' + 
                  'LEFT JOIN employees USING(emplID) ' + 
                  'WHERE jobID = ? ',

  companyByID   : 'SELECT * FROM companies ' + 
                  'WHERE compID = ?',

  employeeByID   : 'SELECT * FROM employees ' +
                   'WHERE emplID = ? ',

  // Treated as many-to-many relationship with companyEmployee as junction table
  employeesCompanyByID   : 'SELECT e.emplID, e.emplFirstName, e.emplLastName ' +
                           'FROM companyEmployee ' +
                           'INNER JOIN employees e USING(emplID) ' +
                           'WHERE compID = ? ' ,

  // Get jobs per company ID
  jobsPerCompany  : 'SELECT * ' + 
                    'FROM jobs ' + 
                    'INNER JOIN companies USING(compID) ' +
                    'WHERE compID = ? ' +
                    'ORDER BY jobDate DESC ' ,


  deleteCompany : 'DELETE c, j, e ' +
                  'FROM companies c ' +
                  'LEFT JOIN jobs j USING(compID) ' +
                  'LEFT JOIN companyEmployee e USING(compID) ' +
                  'where compID = ?',

  deleteJob     : 'DELETE FROM jobs where jobID = ?',


  addJob        : 'INSERT INTO jobs' +
                  '(jobTitle, jobDescription, jobDetails, jobStatus, jobNote, jobContract, compID, emplID)' +
                  'VALUES(?,?,?,?,?,?,?,?)',

  addCompany    : 'INSERT INTO companies(	compName, compType, compNote, compStatus) VALUES(?,?,?,?)',

  // 2 tables have to be updates, here table employees
  addEmployee   : 'INSERT INTO employees ' +
                  '(emplFirstName, emplLastName, emplTel, emplEmail) ' +
                  'VALUES(?,?,?,?) ' ,

  // 2 tables have to be updates, here junction table companyEmployee                
  addEmployee2  : 'INSERT INTO companyEmployee ' +
                  '(emplID, compID) ' +
                  'VALUES(?,?) ' ,                

  updateCompany : 'UPDATE companies ' +
                  'SET compName = ?, compType = ?, compNote = ?, compStatus = ? ' +
                  'WHERE compID = ?',

  updateJob     : 'UPDATE jobs ' +
                  'SET jobTitle = ?, jobDescription	=	?, jobDetails	=	?, jobStatus = ?, jobNote = ?, jobContract = ?, jobClosedReason = ?, jobCloseDate = ?, compID = ?, emplID = ? ' +
                  'WHERE jobID = ?',

  updateEmployee: 'UPDATE employees SET emplFirstName = ?, emplLastName = ?, emplTel = ?, emplEmail = ? WHERE emplID = ?'
}