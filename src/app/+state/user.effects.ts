import { Injectable, InjectionToken, Optional, Inject } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { DataPersistence } from '@nrwl/nx';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UserState } from './user.reducer';
import {
  CreateCustomer,
  CustomerList,
  DeleteCustomer,
  userActionTypes,
  CustomerListSuccess,
  CustomerListFail,
  CreateCustomerSuccess,
  CreateCustomerFail,
  DeleteCustomerSuccess,
  DeleteCustomerFail
} from './user.actions';
import { Scheduler, Observable, of } from 'rxjs';
import { UserService } from '../user.service';
export const DEBOUNCE = new InjectionToken<number>('Test Debounce');
export const SCHEDULER = new InjectionToken<Scheduler>('Test Scheduler');

@Injectable()
export class UserEffects {
  hostName = window.location.hostname;

  /**
   * @description Get number of 'ready assets' for the feed relevant to the logged in dealer
   * @memberof UserEffects
   */
  @Effect()
  customerList$: Observable<Action> = this.dataPersistence.fetch(
    userActionTypes.CUSTOMER_LIST,
    {
      run: (action: CustomerList, state: UserState) => {
        const reqparam: any = JSON.stringify(
          action.payload
        );
        const url = '../data.json';
        const config = {
          method: 'GET',
        };

        return this.service.apiRequest(url, config).pipe(
          map(
            returingListOfAssets =>
              new CustomerListSuccess(returingListOfAssets)
          ),
          catchError(err => of(new CustomerListFail(err)))
        );
      },
      onError: (action: CustomerList, errorResponse: HttpErrorResponse) => {
        return new CustomerListFail(errorResponse.error);
      }
    }
  );
  /**
   * @description Get number of 'ready assets' for the feed relevant to the logged in dealer
   * @memberof UserEffects
   */
  @Effect()
  customerCreate$: Observable<Action> = this.dataPersistence.fetch(
    userActionTypes.CREATE_CUSTOMER,
    {
      run: (action: CreateCustomer, state: UserState) => {
        const reqparam: any = JSON.stringify(
          action.payload
        );
        const url = '../data.json';
        const config = {
          method: 'POST',
          params: action.payload
        };

        return this.service.apiRequest(url, config).pipe(
          map(
            returingListOfAssets =>
              new CreateCustomerSuccess(returingListOfAssets)

          ),
          catchError(err => of(new CreateCustomerFail(err)))
        );
      },
      onError: (action: CreateCustomer, errorResponse: HttpErrorResponse) => {
        return new CreateCustomerFail(errorResponse.error);
      }
    }
  );
  /**
  * @description Get number of 'ready assets' for the feed relevant to the logged in dealer
  * @memberof UserEffects
  */
  @Effect()
  customerDelete$: Observable<Action> = this.dataPersistence.fetch(
    userActionTypes.DELETE_CUSTOMER,
    {
      run: (action: DeleteCustomer, state: UserState) => {
        const reqparam: any = JSON.stringify(
          action.payload
        );
        const url = '../data.json';
        const config = {
          method: 'DELETE',
          params: action.payload
        };

        return this.service.apiRequest(url, config).pipe(
          map(
            returingListOfAssets =>
              new DeleteCustomerSuccess(returingListOfAssets)

          ),
          catchError(err => of(new DeleteCustomerFail(err)))
        );
      },
      onError: (action: DeleteCustomer, errorResponse: HttpErrorResponse) => {
        return new DeleteCustomerFail(errorResponse.error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private dataPersistence: DataPersistence<UserState>,
    private service: UserService,
    // used only for unit tests to be able to inject a debounce value
    @Optional()
    @Inject(DEBOUNCE)
    private debounce: number,
    // used only for unit tests to be able to inject a test scheduler for observables
    @Optional()
    @Inject(SCHEDULER)
    private scheduler: Scheduler
  ) { }
}
