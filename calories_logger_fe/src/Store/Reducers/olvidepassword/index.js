const defaultValue = {

    isEmailSend: false,
    error: null,
  }

const reducer = (state = defaultValue, action = { type: 'NONE', payload: null }) => {
    const { type, payload } = action;
    switch (type) {
      case "EMAIL_SUCCESS":
        return {
          ...state,
          isEmailSend: true
        }
      case "EMAIL_FAILED":
        return {
          ...state,
          isEmailSend: false,
          error: payload
        }
      default:
        return state;
    }
  }

  export default reducer;