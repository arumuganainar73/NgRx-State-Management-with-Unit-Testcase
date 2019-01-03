import { UserState } from './user.reducer';
import { userQuery } from './user.selectors';

describe('users Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  let storeState: UserState;
  beforeEach(() => {
    storeState = {
      userData: null,
      userDelete: null,
      createUserFail: null,
      deleteUserFail: null,
      listfail: null
    };
  });

  describe('user Selectors', () => {
    it('getAllUsers() should return the list of users', () => {
      const results = userQuery.getAllUsers.projector(
        storeState
      );
      expect(results.length).toBe(0);
    });

  });
});
