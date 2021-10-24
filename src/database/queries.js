const { executeQuery } = require("./database");

exports.getStatusMessages = () => {
  let statusMessages = executeQuery(`SELECT * FROM status_messages`);
  return new Promise((resolve, reject) => {
    statusMessages.then((result) => {
      resolve(result.rows.map((row) => row.config_value));
    });
  });
};

const channelTypes = {
  welcome: "welcome_channel",
  exit: "exit_channel"
}

exports.getwelcomeServerID = (serverID) => {
  return getMessageChannelID(serverID, channelTypes.welcome);  
};

exports.getexitServerID = (serverID) => {
  return getMessageChannelID(serverID, channelTypes.exit);  
};

function getMessageChannelID(serverID, channelType){

  let channel = executeQuery(
    `SELECT ${channelType} FROM servers WHERE server_id = '${serverID}'`
  );
  return new Promise((resolve, reject) => {
    channel.then((result) => {
      let response = null;
      if (result.rows.length > 0) {
        response = result.rows[0].welcome_channel;
      }
      resolve(response);
    }).catch((err) =>{reject(err);});
  });

};