// tslint:disable
import * as Sequelize from 'sequelize';


// table: userlocation
export interface userlocationAttribute {
  userlocationID:number;
  userID:number;
  countryID:number;
  userlocationPincode:string;
  cityID:number;
  userlocationType:string;
}
export interface userlocationInstance extends Sequelize.Instance<userlocationAttribute>, userlocationAttribute { }
export interface userlocationModel extends Sequelize.Model<userlocationInstance, userlocationAttribute> { }
