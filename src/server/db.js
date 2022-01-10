var mysql = require('mysql')
const db = mysql.createPool({
    host : 'my-db.cfmt8rn8y802.ap-northeast-2.rds.amazonaws.com',
    user : 'root',
    password : 'talon1982on',
    database : 'mydb'
})

module.exports = db