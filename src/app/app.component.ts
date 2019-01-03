import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

/*ngrx*/
import * as fromusers from './+state/user.reducer';
import * as usersActions from './+state/user.actions';
import * as usersSelector from './+state/user.selectors';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular';
  description = 'Angular + NgRx State + Unit Test Case + Angular Material Example';
  constructor(private userStore: Store<fromusers.UserState>
  ) {
    this.userStore.dispatch(new usersActions.CustomerList({}));
  }
  ngOnInit() {
    // success
    this.userStore
      .pipe(select(usersSelector.userQuery.getAllUsers))
      .subscribe((response: any) => {
        if (response) {
          console.log(response);
        }
      });

  }
}
