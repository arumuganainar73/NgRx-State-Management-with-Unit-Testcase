import {
  CustomerList,
  CreateCustomer,
  DeleteCustomer,
  CustomerListFail
} from './user.actions';
import {
  UserState,
  initialState,
  UserReducer
} from './user.reducer';
import { Customer } from '../customers/models/customer';

describe('users Reducer', () => {
  beforeEach(() => {

  });

  describe('load assets for users actions', () => {
    it('should return the CustomerList', () => {
      const assets = [{
        id: '1',
        name: 'test',
        age: 25,
        active: true
      }];
      /* start action and completion action */
      const action = new CustomerList(assets);
      const result = UserReducer(initialState, action);
      expect(result).not.toBeNull();
    });
    it('should return the LoadAssetFail', () => {
      const error = 'load asset Fail!!!';
      /* start action and completion action */
      const action = new CustomerListFail(error);
      const result = UserReducer(initialState, action);
      expect(result.userDelete).toBe(error);
    });
  });

});
