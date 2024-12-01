const db = require('./database')

const Pessoa = db.sequelize.define('pacientes', {
  name: {
    type: db.Sequelize.STRING,
    allowNull: false
  },

  email: {
    type: db.Sequelize.STRING,
  },

  profession: {
    type: db.Sequelize.STRING,
  },

  city: {
    type: db.Sequelize.STRING,
  },

  content: {
    type: db.Sequelize.TEXT,
  }

})

module.exports = Pessoa