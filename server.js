const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
const { use } = require('./routes');
const e = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

// turn on connection to db and server
// we had the force as false. By making it true, it the db connection must sync w/ the model definitions
// this allows the table to be overwritten and created
// run/check it once to update, then change it back to false so it doesn't keep on dropping the tables and seeds
sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});