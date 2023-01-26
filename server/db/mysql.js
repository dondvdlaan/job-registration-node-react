"use strict"
const mysql = require('mysql2');

// *************** Constants and variables *************** 
let pool;

// *************** Functions *************** 
/**
 * Initialisation of DB
 */
const init = () => {

  pool = mysql.createPool({
    host: process.env.MYSQL_HOST_IP,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
  });

  const db = `'${process.env.MYSQL_DATABASE}'`;

  // pool.query(`select schema_name from information_schema.schemata where schema_name = ${db}`, (err, results) => {
  //   if (err) console.log(err);
  //   else console.log("pool.query: ", results);
  // })
}

/**
 * SQL statement with eventual values are sent to the DB for execution
 * 
 * @param sql     [string]          : sql statement
 * @param values  [array of string] : values for insert and update commands
 */
const transmit = (sql, values = []) => {

  if (!pool) init();

  return new Promise((res, rej) => {

    console.log("sql ", sql);
    console.log("values ", values);

    pool.query(sql, values, (err, results) => {
      if (err) rej(err);
      else res(results);
    });
  })
}

/**
 * Add Employee spans 2 tables(employees, companyEmployee), so we need a Transaction / Commit
 */
const transmitAddEmployee = (sql, values = [], sql2, compID) => {

  // Initialise pool
  if (!pool) init();

  // Start transferring data
  return new Promise((resolve, reject) => {

    pool.getConnection((err, connection) => {
      if (err) {
        return reject("Error occurred while getting the connection");
      }
      // Start transaction
      return connection.beginTransaction(err => {
        if (err) {
          connection.release();
          return reject("Error occurred while creating the transaction");
        }
        // Inserting values in Employee table
        return pool.query(sql, values, (err) => {
          if (err) {
            return connection.rollback(() => {
              connection.release();
              return reject("Inserting in to Employee table failed", err)
            });
          }
          // Recover Employee ID
          return pool.query('SELECT LAST_INSERT_ID();', (err, res) => {
            if (err) {
              return connection.rollback(() => {
                connection.release();
                return reject("Recovering Employee ID failed", err)
              });
            } 
            console.log("res ID ",res[0]['LAST_INSERT_ID()']);
            const emplID = res[0]['LAST_INSERT_ID()'];
            
            console.log("emplID ",emplID);
            console.log(" compID ",compID);

            // Update junction table companyEmployee  
            return pool.query(sql2,[emplID, compID], (err, results) => {
              if (err) {
                return connection.rollback(() => {
                  connection.release();
                  return reject("Inserting in to companyEmployee table failed", err)
                });
              }
              // Send message back to transmitAddEmployee function  
              else resolve(results);
          
                // Commit connection
                return connection.commit((err) => {
                  if (err) {
                    return connection.rollback(() => {
                      connection.release();
                      return reject("Commit failed");
                    });
                  }
                  connection.release();
              }); // Connection commit
            }); // Pool query III 
          }); // Pool query II
        }); // Pool query
      }); // Begin transaction
    }); // Get connection
  }); // New Promise
}; // Transmit employee

module.exports = {
  init,
  transmit,
  transmitAddEmployee
}