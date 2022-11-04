var mysql = require('mysql');


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mydb"
});


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  // con.query("CREATE DATABASE mydb", function(err,result){ //create databse
  // var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";//create table
  // var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY"; //add 1 column
  // var sql = "INSERT INTO customers (name, address) VALUES ('Anu', 'Helsinki')";//1 record insertion
  // var sql = "INSERT INTO customers (name, address) VALUES?";
  // var values = [
  //   ['Anu', 'Helsinki 23'],
  //   ['John', 'Highway 71'],
  //   ['Peter', 'Lowstreet 4'],
  //   ['Amy', 'Apple st 652'],
  //   ['Hannah', 'Mountain 21'],
  //   ['Michael', 'Valley 345'],
  //   ['Sandy', 'Ocean blvd 2'],
  //   ['Betty', 'Green Grass 1'],
  //   ['Richard', 'Sky st 331']
  // ]                              //inserting multiple customers
  // con.query(sql,[values], function(err,result) {
  //   if (err) throw err;
  //   console.log("No of inserted:" + result.affectedRows);//result object contains information about how the query affected the table.
  // }
  // );

  // var sql = "SELECT name, address FROM customers";// only select specific column(name,address)
  // var sql = "SELECT * FROM customers WHERE address LIKE 'H%'";//show customers whose address starting as H

  // var adr = 'Helsinki 23';
  // var sql = "SELECT * FROM customers WHERE address = "+ mysql.escape(adr);//to escape from web hacking if query values are provided by user

  var sql = "UPDATE customers SET address = 'Itakeskus 23' WHERE address = 'Helsinki 23'";
  con.query(sql, function(err,result,fields) {
    if (err) throw err;
    console.log(result.message);


  });

});