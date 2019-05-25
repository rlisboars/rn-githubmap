// TYPES
export const Types = {
  ADD_REQUEST: "favorites/ADD_REQUEST",
  ADD_SUCCESS: "favorites/ADD_SUCCESS",
  ADD_FAILURE: "favorites/ADD_FAILURE",
  SET_MODAL: "favorites/SET_MODAL"
};

// REDUCERS
const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null,
  modal: {
    visible: false,
    coordinates: null
  }
};

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...state, loading: true };
    case Types.ADD_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: [...state.data, action.user],
        error: null,
        modal: { visible: false }
      };
    }
    case Types.ADD_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.error
      };
    }
    case Types.SET_MODAL: {
      return {
        ...state,
        modal: action.modal,
        error: null
      };
    }
    default:
      return state;
  }
}

// ACTIONS
export const Creators = {
  addUserRequest: (login, coordinates) => ({
    type: Types.ADD_REQUEST,
    login,
    coordinates
  }),
  addUserSuccess: user => ({ type: Types.ADD_SUCCESS, user }),
  addUserFailure: error => ({ type: Types.ADD_FAILURE, error }),
  setModalVisibility: modal => ({ type: Types.SET_MODAL, modal })
};
