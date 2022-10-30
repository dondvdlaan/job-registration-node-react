module.exports = {
    allJobs       : 'SELECT * FROM jobs INNER JOIN companies USING(compID)',
    allCompanies  : 'SELECT * FROM companies ' +
                    'LEFT JOIN employees USING(compID)' +
                    'ORDER BY compName',
    jobByID       : 'SELECT * FROM jobs INNER JOIN companies USING(compID) where jobID = ?',
    companyByID   : 'SELECT * FROM companies left JOIN employees USING(compID) where compID = ?',
    deleteCompany : 'DELETE FROM companies where compID = ?',
    deleteJob     : 'DELETE FROM jobs where jobID = ?',
    addJob        : 'INSERT INTO jobs(jobTitle, jobDescription, jobDetails, jobStatus, compID) VALUES(?,?,?,?,?)',
    addCompany    : 'INSERT INTO companies(	compName, compType, compNote, compStatus) VALUES(?,?,?,?)',
    addEmployee   : 'INSERT INTO employees' +
                    '(emplFirstName, emplLastName, emplTel, emplEmail,  compID)' +
                    'VALUES(?,?,?,?,?)',
    updateCompany : 'UPDATE companies SET compName = ?, compType = ?, compNote = ?, compStatus = ? WHERE compID = ?',
    updateJob     : 'UPDATE jobs SET jobTitle = ?, jobDescription	=	?, jobDetails	=	?, jobStatus = ?, compID = ? WHERE jobID = ?',
    updateEmployee: 'UPDATE employees SET emplFirstName = ?, emplLastName = ?, emplTel = ?, emplEmail = ? WHERE emplID = ?'
  }