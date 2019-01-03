import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Customer } from '../models/customer';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { DeleteCustomer } from '../../+state/user.actions';
/*ngrx*/
import * as fromusers from '../../+state/user.reducer';
import * as usersActions from '../../+state/user.actions';
import * as usersSelector from '../../+state/user.selectors';
@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit, OnChanges {

  @Input() customer: Customer;
  displayedColumns: string[] = ['position', 'name', 'age', 'action'];
  dataSource: any;
  constructor(private userStore: Store<fromusers.UserState>) { }

  ngOnInit() {
    this.dataSource = this.customer;
  }
  ngOnChanges() {
    this.dataSource = this.customer;
  }
  removeCustomer(id) {
    this.userStore.dispatch(new DeleteCustomer({ id: id }));
  }
}
