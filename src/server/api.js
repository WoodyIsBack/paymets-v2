var mysql = require('mysql');

var config =  {
    host: "localhost",
    port: "3306",
    user: "itai",
    password: "Payments1!",
    database: "payments"
  };


const submitPaymentToDb = () => {
    //ev.preventDefault(); //stops browser submmiting form
    let payment = {
        user: document.getElementById('user').value,
        paymentDate: document.getElementById('date').value,
        from: document.getElementById('from').value,
        to: document.getElementById('to').value,
        amount: document.getElementById('amount').value,
        notes: 'none'
    }
    document.getElementById('payment-form').reset(); // Clears the form

    var con = mysql.createConnection(config);
    
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        
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
}


module.exports = submitPaymentToDb;