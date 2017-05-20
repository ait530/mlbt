//Importing MySQL connection
var connection = require("../config/connection.js");


//ORM Object for SQL Statement functions
var orm = {
    //Selecting all for SQL Statement
    all: function(tableInput, callback) {
        var queryString = "SELECT * FROM ?? ORDER BY title ASC";
        connection.query(queryString, [tableInput], function(err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
    //Inserting a new item for SQL Statement
    create: function(tableInput, colname1, colname2, colname3, colname4, colname5, val1, val2, val3, val4, val5, callback) {

        var queryString = "INSERT INTO ?? ( ??, ??, ??, ??, ?? ) VALUES ( ?, ?, ?, ?, ? )";

        connection.query(queryString, [tableInput, colname1, colname2, colname3, colname4, colname5, val1, val2, val3, val4, val5], function(err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
    update: function(tableInput, colname1, colname2, colname3, colname4, colname5, val1, val2, val3, val4, val5, callback) {

        var queryString = "INSERT INTO ?? ( ??, ??, ??, ??, ?? ) VALUES ( ?, ?, ?, ?, ? )";

        connection.query(queryString, [tableInput, colname1, colname2, colname3, colname4, colname5, val1, val2, val3, val4, val5], function(err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },


      //DELETE
    delete: function (tableInput, data, callback) {
        var queryString = "DELETE FROM ?? WHERE ?";

        connection.query(queryString, [tableInput, data], function (err, results) {
          if(err) {
            throw err;
          }

          console.log(results); 
          callback(results);
      
      
        });
    },
    //======================== USER
    allUser: function(tableInput, callback) {
        var queryString = "SELECT * FROM ?? ";
        connection.query(queryString, [tableInput], function(err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
    //Inserting a new item for SQL Statement
    userCheckout: function(tableInput, col1, col2, col3, col4, col5, val1, val2, val3, val4, val5, callback) {

        var queryString = "INSERT INTO ?? ( ??, ??, ??, ??, ?? ) VALUES ( ?, ?, ?, ?, ?)";

        connection.query(queryString, [tableInput, col1, col2, col3, col4, col5, val1, val2, val3, val4, val5], function(err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },

    //update
    updateBooksTable: function(tableInput, loanerNetID, val1, bookID, val2, callback) {

        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?)";

        connection.query(queryString, [tableInput, loanerNetID, val1, bookID, val2], function(err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    }
    

    //UPDATE books SET books.loanerNetID = "jlh974" WHERE books.id= 2; 
    //checkoutlist
    // joinTables: function(bookTitle, userName, userNetId, userCheckout, userDue, books, users, bookID, userID, val1, val2, val3, val4, val5, callback) {

    //     var queryString = "SELECT ?? , ?? , ?? , ?? , ?? FROM ?? INNER JOIN ?? ON ?? = ??";

    //     connection.query(queryString, [bookTitle, userName, userNetId, userCheckout, userDue, books, users, bookID, userID], function(err, result) {
    //         if (err) {
    //             throw err;
    //         }
    //         callback(result);
    //     });
    // }
  
};

//SELECT books.title, users.name, users.netID, users.checkout_date, users.due_date FROM books INNER JOIN users ON books.id = users.id;

//Exporting ORM object for model
module.exports = orm;




