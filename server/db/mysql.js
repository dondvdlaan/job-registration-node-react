"use strict"
const mysql = require('mysql2');

// *************** Constants and variables *************** 
let pool   

// *************** Functions *************** 
/**
 * Initialisation of DB
 */
const init = ()=>{
  
     pool = mysql.createPool({
        host    : process.env.MYSQL_HOST_IP,
        user    : process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE
      });

      const db = `'${process.env.MYSQL_DATABASE}'`;

    pool.query(`select schema_name from information_schema.schemata where schema_name = ${db}`, (err, results) => {
      if (err) console.log(err);
      else console.log("init pool:", results);
    })
}

/**
 * SQL statement with eventual values are sent to the DB for execution
 * 
 * @param sql     [string]          : sql statement
 * @param values  [array of string] : values for insert and update commands
 */
const transmit = (sql, values = [])=>{
  
  if(!pool) init();

  return new Promise((res,rej) => {

    console.log("sql ", sql);
    console.log("values ", values);

    pool.query(sql, values, (err, results) => {
      if (err)  rej(err);
      else      res(results);
    });
  })
}

module.exports = {
    init,
    transmit
}