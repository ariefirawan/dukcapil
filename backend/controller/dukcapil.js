const Dukcapil = require('../model/dukcapil');
const { Op } = require('sequelize');
const sequelize = require('../utils/database');

exports.getData = async (req, res, next) => {
  const search = req.body;
  search.NO_KAB = 72;
  if (search.NAMA_LGKP) {
    search.NAMA_LGKP = { [Op.like]: '%' + req.body.NAMA_LGKP + '%' };
  }
  if (search.TGL_LHR) {
    search.TGL_LHR = sequelize.where(
      sequelize.fn('date', sequelize.col('TGL_LHR')),
      '=',
      req.body.TGL_LHR
    );
  }

  const data = await Dukcapil.findAll({
    where: {
      [Op.and]: [search],
    },
    limit: 40
  });

  res.status(200).json(data);
};
