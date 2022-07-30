const defaultValue = {

    isInsert: false,
    error: null,
  }

const reducer = (state = defaultValue, action = { type: 'NONE', payload: null }) => {
    const { type, payload } = action;
    switch (type) {
      case "INSERT_CALORIE_SUCCESS":
        return {
          ...state,
          isInsert: true
        }
      case "INSERT_CALORIE_FAILDED":
        return {
          ...state,
          isInsert: false,
          error: payload
        }
      default:
        return state;
    }
  }

  export default reducer;