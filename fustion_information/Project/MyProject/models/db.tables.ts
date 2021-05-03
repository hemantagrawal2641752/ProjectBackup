// tslint:disable
import * as path from 'path';
import * as sequelize from 'sequelize';
import * as def from './db';

export interface ITables {
  userlocation:def.userlocationModel;
}

export const getModels = function(seq:sequelize.Sequelize):ITables {
  const tables:ITables = {
    userlocation: seq.import(path.join(__dirname, './userlocation')),
  };
  return tables;
};
