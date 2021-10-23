var database;

exports.initialize = (databaseClient) => {
  database = databaseClient;
};

exports.executeQuery = (query) => {
  return new Promise((resolve, reject) => {
       let queryResult = database.query(query)
       queryResult.then((result) => {resolve(result)}).catch((err) => {reject(err)})
  });
};
