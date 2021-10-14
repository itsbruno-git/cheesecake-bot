const {executeQuery} = require('./database')

exports.getStatusMessages = () => {
let statusMessages = executeQuery(`SELECT * FROM status_messages`)
return new Promise((resolve, reject) =>{
    statusMessages.then((result) => {resolve(result.rows.map(row => row.config_value))})
})
}