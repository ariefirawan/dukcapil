const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const sequelize = require('./utils/database');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
//setting up config file
dotenv.config({ path: 'backend/utils/config.env' });

const dukcapilRoutes = require('./routes/dukcapil');

app.use('/api/v1', dukcapilRoutes);

sequelize
  .sync()
  .then((result) => {
    app.listen(process.env.PORT, () => {
      console.log(`Database connect to ${result.options.dialect}`);
      console.log(`App listen on PORT ${process.env.PORT}`);
    });
  })
  .catch((err) => console.error(err));
