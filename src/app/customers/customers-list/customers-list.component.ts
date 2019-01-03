import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { Customer } from '../models/customer';
/*ngrx*/
import * as fromusers from '../../+state/user.reducer';
import * as usersActions from '../../+state/user.actions';
import * as usersSelector from '../../+state/user.selectors';
@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  customers: Observable<Customer[]>;
  constructor(private userStore: Store<fromusers.UserState>
  ) {
  }
  ngOnInit() {
    // success
    this.userStore
      .pipe(select(usersSelector.userQuery.getAllUsers))
      .subscribe((response: any) => {
        if (response) {
          this.customers = response;
          console.log(response);
        }
      });
  }

}
