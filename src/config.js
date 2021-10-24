require("dotenv").config();

module.exports = {
  BOT: {
    token: process.env.BOT_TOKEN,
    prefix: process.env.BOT_PREFIX,
    owner: process.env.BOT_OWNER,
    database: process.env.DATABASE_URL,
  }
};
