var database

exports.initialize = databaseClient =>{
    database = databaseClient;
}

exports.executeQuery = query =>{
return database.query(query)
}