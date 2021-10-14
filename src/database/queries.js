const { executeQuery } = require("./database");

exports.getStatusMessages = () => {
  let statusMessages = executeQuery(`SELECT * FROM status_messages`);
  return new Promise((resolve, reject) => {
    statusMessages.then((result) => {
      resolve(result.rows.map((row) => row.config_value));
    });
  });
};


exports.getwelcomeServerID = (serverID) => {
  let welcomeServer = executeQuery(
    `SELECT config_value FROM bot_configuration WHERE server_id = '${serverID}' AND parameter = 'WELCOME_SERVER'`
  );
  return new Promise((resolve, reject) => {
    welcomeServer.then((result) => {
      let response = null;
      if (result.rows.length > 0) {
        response = result.rows[0].config_value;
      }
      resolve(response);
    });
  });
};
