const Sequelize = require('sequelize')
const sequelize = new Sequelize('pacientes','postgres','123456', {
  host: 'localhost',
  dialect: 'postgres'
})


module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize
}