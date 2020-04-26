var mysql = require('mysql');
var config =  {
    host: "localhost",
    port: "3306",
    user: "itai",
    password: "Payments1!",
    database: "payments"
  };

var con = mysql.createConnection(config);

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  var payment = {
    type: 'banana',
    from: '21/3/20',
    to: '22/3/20',
    paymentDate: '23/02/20',
    user: 'Itai Tal',
    amount: '999',
    notes: 'none'
  }

  
  con.query('INSERT INTO PaymentsList SET ?', payment, (error, results, fields) => {
    if (error) {
      console.error('An error occurred while executing the query')
      throw error
    }
    else console.log(`1 line has been added`)
    con.end(function(err) {
      if (err) {
        return console.log(err.message);
      }
    });
  });
});