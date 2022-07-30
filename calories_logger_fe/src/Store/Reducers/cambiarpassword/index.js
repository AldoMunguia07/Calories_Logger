const defaultValue = {

    isPasswordChanged: false,
    error: null,
  }

const reducer = (state = defaultValue, action = { type: 'NONE', payload: null }) => {
    const { type, payload } = action;
    switch (type) {
      case "CHANGE_PASSWORD_SUCCESS":
        return {
          ...state,
          isPasswordChanged: true
        }
      case "CHANGE_PASSWORD_FAILED":
        return {
          ...state,
          isPasswordChanged: false,
          error: payload
        }
      default:
        return state;
    }
  }

  export default reducer;