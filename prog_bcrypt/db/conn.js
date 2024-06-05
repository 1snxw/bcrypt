const {Sequelize} = require('sequelize')
const sequelize = new Sequelize('db_log', 'root', 'senai',{
    host: 'localhost',
    dialect: 'mysql'
}) 

// sequelize.authenticate().then(()=>{
//     console.log('conexão realizada com sucesso')
// }).catch((err)=>{
//     console.error('erro ao conectar com o banco de dados!',err)
// })

module.exports = sequelize