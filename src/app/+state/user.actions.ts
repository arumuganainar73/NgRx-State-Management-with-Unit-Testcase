import { Action } from '@ngrx/store';
import { Customer } from '../customers/models/customer';

export enum userActionTypes {
  CUSTOMER_LIST = 'Çustomer list',
  CUSTOMER_LIST_SUCCESS = 'Çustomer list success',
  CUSTOMER_LIST_FAIL = 'Çustomer list fail',

  CREATE_CUSTOMER = 'Customer_Create',
  CREATE_CUSTOMER_SUCCESS = 'Customer_Create SUCCESS',
  CREATE_CUSTOMER_FAIL = 'Customer_Create FAIL',

  DELETE_CUSTOMER = 'Customer_Delete',
  DELETE_CUSTOMER_SUCCESS = 'Customer_Delete SUCCESS',
  DELETE_CUSTOMER_FAIL = 'Customer_Delete FAIL',

}
export class CustomerList implements Action {
  readonly type = userActionTypes.CUSTOMER_LIST;

  constructor(public payload: any) { }
}
export class CustomerListSuccess implements Action {
  readonly type = userActionTypes.CUSTOMER_LIST_SUCCESS;

  constructor(public payload: any) { }
}
export class CustomerListFail implements Action {
  readonly type = userActionTypes.CUSTOMER_LIST_FAIL;

  constructor(public payload: any) { }
}
export class CreateCustomer implements Action {
  readonly type = userActionTypes.CREATE_CUSTOMER;

  constructor(public payload: any) { }
}
export class CreateCustomerSuccess implements Action {
  readonly type = userActionTypes.CREATE_CUSTOMER_SUCCESS;

  constructor(public payload: any) { }
}
export class CreateCustomerFail implements Action {
  readonly type = userActionTypes.CREATE_CUSTOMER_FAIL;

  constructor(public payload: any) { }
}

export class DeleteCustomer implements Action {
  readonly type = userActionTypes.DELETE_CUSTOMER;
  constructor(public payload: any) { }
}
export class DeleteCustomerSuccess implements Action {
  readonly type = userActionTypes.DELETE_CUSTOMER_SUCCESS;
  constructor(public payload: any) { }
}
export class DeleteCustomerFail implements Action {
  readonly type = userActionTypes.DELETE_CUSTOMER_FAIL;
  constructor(public payload: any) { }
}
export type userAction =
  CustomerList
  | CustomerListSuccess
  | CustomerListFail
  | CreateCustomerSuccess
  | CreateCustomerFail
  | CreateCustomer
  | DeleteCustomer
  | DeleteCustomerSuccess
  | DeleteCustomerFail;

export const fromUserActions = {
  CustomerList,
  CustomerListSuccess,
  CustomerListFail,
  CreateCustomerSuccess,
  CreateCustomerFail,
  CreateCustomer,
  DeleteCustomer,
  DeleteCustomerSuccess,
  DeleteCustomerFail
};
