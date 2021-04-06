const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const sequelize = require('./utils/database');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
//setting up config file
dotenv.config({ path: 'backend/utils/config.env' });

const dukcapilRoutes = require('./routes/dukcapil');

app.use(express.static(path.join('backend/public')));

app.use('/api/v1', dukcapilRoutes);

app.use((req, res, next) => {
  res.sendFile(path.resolve(__dirname, 'backend/public', 'index.html'));
});

sequelize
  .sync()
  .then((result) => {
    app.listen(process.env.PORT, () => {
      console.log(`Database connect to ${result.options.dialect}`);
      console.log(`App listen on PORT ${process.env.PORT}`);
    });
  })
  .catch((err) => console.error(err));
