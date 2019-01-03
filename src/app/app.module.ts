import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { reducer } from './reducers/customer.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  UserReducer,
  initialState as appInitialState
} from './+state/user.reducer';
import { UserEffects } from './+state/user.effects';
import { storeFreeze } from 'ngrx-store-freeze';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { CreateCustomerComponent } from './customers/create-customer/create-customer.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { CustomerDetailsComponent } from './customers/customer-details/customer-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule, MatCheckboxModule, MatTableModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { DataPersistence } from '@nrwl/nx';

@NgModule({
  declarations: [
    AppComponent,
    CreateCustomerComponent,
    CustomersListComponent,
    CustomerDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatCheckboxModule,
    HttpClientModule,
    StoreModule.forRoot({
      customer: UserReducer
    }),
    EffectsModule.forRoot([UserEffects]),

  ],
  providers: [UserEffects, DataPersistence],
  bootstrap: [AppComponent]
})
export class AppModule { }
