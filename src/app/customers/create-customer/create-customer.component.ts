import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CreateCustomer } from '../../+state/user.actions';
/*ngrx*/
import * as fromusers from '../../+state/user.reducer';
import * as usersActions from '../../+state/user.actions';
import * as usersSelector from '../../+state/user.selectors';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  constructor(private userStore: Store<fromusers.UserState>) { }

  ngOnInit() {
  }
  saveCustomer(id, name, age) {
    this.userStore.dispatch(new CreateCustomer(
      {
        id: id,
        name: name,
        age: age,
        active: false
      }
    ));
  }
}
