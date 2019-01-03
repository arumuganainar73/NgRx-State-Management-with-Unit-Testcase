import { TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NxModule } from '@nrwl/nx';
import { DataPersistence } from '@nrwl/nx';
import { cold, hot, getTestScheduler } from 'jasmine-marbles';
import { Actions } from '@ngrx/effects';

import {
  UserEffects,
  SCHEDULER,
  DEBOUNCE
} from './user.effects';
import { empty } from 'rxjs';
import {
  CreateCustomer, CustomerListFail, CustomerListSuccess, DeleteCustomer, CustomerList, DeleteCustomerFail, DeleteCustomerSuccess, CreateCustomerFail, CreateCustomerSuccess
} from './user.actions';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../user.service';
export class TestActions extends Actions {
  constructor() {
    super(empty());
  }

  set stream(source: Observable<any>) {
    this.source = source;
  }
}

export function getActions() {
  return new TestActions();
}

class MockUserService {
  apiRequest = jasmine.createSpy('apiRequest');
}
describe('UserEffects', () => {
  let actions$: TestActions;
  let effects: UserEffects;
  let userService: MockUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        HttpClientModule
      ],
      providers: [
        UserEffects,
        DataPersistence,
        {
          provide: UserService,
          useClass: MockUserService
        },
        { provide: Actions, useFactory: getActions },
        { provide: DEBOUNCE, useValue: 30 },
        { provide: SCHEDULER, useFactory: getTestScheduler }
      ]
    });

    effects = TestBed.get(UserEffects);
    userService = TestBed.get(UserService);
    actions$ = TestBed.get(Actions);
  });

  describe('customerList$', () => {
    it('should return a customerList, with users, on success', () => {
      // payload data
      const users = [];
      const config = {

      };
      /* start action and completion action */
      const action = new CustomerList({
        config: config
      });

      const completion = new CustomerListSuccess(users);

      // setup the Effect
      actions$.stream = hot('-a', { a: action });
      const response = cold('-b|', { b: users });
      const expected = cold('--c', { c: completion });

      userService.apiRequest.and.returnValue(response);

      expect(effects.customerList$).toBeObservable(expected);
    });

    it('should return a customerListFail if there is a failure', () => {
      const error = 'load asset Fail!!!';
      const config = {
      };
      const action = new CustomerList({ assetConfig: config });
      const completion = new CustomerListFail(error);

      actions$.stream = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: completion });
      userService.apiRequest.and.returnValue(response);

      expect(effects.customerList$).toBeObservable(expected);
    });
  });
  describe('customerCreate$', () => {
    it('should return a customerCreate, with users, on success', () => {
      // payload data
      const users = [{
        id: '1',
        name: 'nainar',
        age: '25',
        active: 'true'
      }];
      const config = {
        id: '1',
        name: 'nainar',
        age: '25',
        active: 'true'
      };
      /* start action and completion action */
      const action = new CreateCustomer(config);
      const completion = new CreateCustomerSuccess(users);

      // setup the Effect
      actions$.stream = hot('-a', { a: action });
      const response = cold('-b|', { b: users });
      const expected = cold('--c', { c: completion });

      userService.apiRequest.and.returnValue(response);

      expect(effects.customerList$).toBeObservable(expected);
    });

    it('should return a customerCreateFail if there is a failure', () => {
      const error = 'create user Fail!!!';
      const config = {
        id: '1',
        name: 'nainar',
        age: '25',
        active: 'true'
      };
      const action = new CreateCustomer(config);
      const completion = new CreateCustomerFail(error);

      actions$.stream = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: completion });
      userService.apiRequest.and.returnValue(response);

      expect(effects.customerCreate$).toBeObservable(expected);
    });
  });
  describe('customerDelete$', () => {
    it('should return a customerDelete, with users, on success', () => {
      // payload data
      const users = [];
      /* start action and completion action */
      const action = new DeleteCustomer({
        id: '1'
      });

      const completion = new DeleteCustomerSuccess(users);

      // setup the Effect
      actions$.stream = hot('-a', { a: action });
      const response = cold('-b|', { b: users });
      const expected = cold('--c', { c: completion });

      userService.apiRequest.and.returnValue(response);

      expect(effects.customerDelete$).toBeObservable(expected);
    });

    it('should return a customerDeleteFail if there is a failure', () => {
      const error = 'delete user Fail!!!';
      const config = {
      };
      const action = new DeleteCustomer({ assetConfig: config });
      const completion = new DeleteCustomerFail(error);

      actions$.stream = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: completion });
      userService.apiRequest.and.returnValue(response);

      expect(effects.customerDelete$).toBeObservable(expected);
    });
  });
});
