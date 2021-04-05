const { DataTypes } = require('sequelize');

const sequelize = require('../utils/database');

const Dukcapil = sequelize.define(
  'dukcapil',
  {
    NIK: {
      type: DataTypes.DOUBLE,
      primaryKey: true,
    },
    NAMA_LGKP: {
      type: DataTypes.STRING,
    },
    JENIS_KLMIN: DataTypes.INTEGER,
    TMPT_LHR: DataTypes.STRING,
    TGL_LHR: DataTypes.DATEONLY,
    END_DATE: DataTypes.DATEONLY,
    UMUR: DataTypes.INTEGER,
    AKTA_LHR: DataTypes.INTEGER,
    NO_AKTA_LHR: DataTypes.TEXT,
    GOL_DRH: DataTypes.INTEGER,
    AGAMA: DataTypes.INTEGER,
    STAT_KWN: DataTypes.INTEGER,
    NO_AKTA_KWN: DataTypes.TEXT,
    TGL_KWN: DataTypes.DATE,
    AKTA_CRAI: DataTypes.INTEGER,
    NO_AKTA_CRAI: DataTypes.TEXT,
    TGL_CRAI: DataTypes.DATE,
    STAT_HBKEL: DataTypes.INTEGER,
    PDDK_AKH: DataTypes.INTEGER,
    JENIS_PKRJN: DataTypes.INTEGER,
    NAMA_LGKP_IBU: DataTypes.STRING,
    NAMA_LGKP_AYAH: DataTypes.STRING,
    NO_KK: DataTypes.DOUBLE,
    NO_PROP: DataTypes.INTEGER,
    NO_KAB: DataTypes.INTEGER,
    NO_KEC: DataTypes.INTEGER,
    NO_KEL: DataTypes.INTEGER,
  },
  { timestamps: false }
);

module.exports = Dukcapil;
