import { call, put, select } from "redux-saga/effects";
import api from "~/services/api";

import { Creators as UsersActions } from "~/store/ducks/users";

export function* addUser(action) {
  try {
    const { data } = yield call(api.get, `users/${action.login}`);
    const currentIndex = yield select(state =>
      state.users.data.findIndex(user => user.id === data.id)
    );
    if (currentIndex >= 0)
      yield put(UsersActions.addUserFailure("Usuário já adicionado"));
    else
      yield put(
        UsersActions.addUserSuccess({
          ...data,
          coordinates: action.coordinates
        })
      );
  } catch (err) {
    yield put(UsersActions.addUserFailure("" + err));
  }
}
