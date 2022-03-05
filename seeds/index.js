const sUsers = require('./user-seeds');
const sPosts = require('./post-seeds');
const sComments = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async() => {
    await sequelize.sync({ force: true });
    await sUsers();
    await sPosts();
    await sComments();
    process.exit(0);
};

seedAll();