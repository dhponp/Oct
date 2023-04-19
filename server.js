var http = require('http');
var MongoClient = require('mongodb').MongoClient;

//Connect and create 'Oct' db
var url = "mongodb://root:rootpassword@localhost:27017/Oct?authMechanism=DEFAULT";

//create a server object:
http.createServer(function (req, response) {
  response.write('hello from Oct server');
  
  MongoClient.connect(url, function(err, db) {
	if (err) response.write(err);

	var dbo = db.db("Oct");
	
	//Create collection vet
	dbo.createCollection("vet", function(err, res) {
      if (err) throw err;
      console.log("Collection created!");
      db.close();
    });
	
	//Populate the collection
    var data = [
		{ "_id": 1, "name": "apples", "qty": 5, "rating": 3 },
		{ "_id": 2, "name": "bananas", "qty": 7, "rating": 1, "microsieverts": 0.1 },
		{ "_id": 3, "name": "oranges", "qty": 6, "rating": 2 },
		{ "_id": 4, "name": "avocados", "qty": 3, "rating": 5 },
    ];
	
    dbo.collection("vet").insertMany(data, function(err, res) {
      if (err) throw err;
      console.log("Number of vet inserted: " + res.insertedCount);
      db.close();
    });
	
	//Retrieve the apples amount
	var query = { name: "apples" };
    dbo.collection("vet").find(query).toArray(function(err, result) {
      if (err) throw err;
      response.write('hello world: ' + result.qty+ ' apples');
      db.close();
    });
	
	
  });
  
  response.end(); //end the response
}).listen(8080); //the server object listens on port 8080