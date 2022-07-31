const defaultValue = {
  documents: {
    total: 0,
    page: 1,
    pageLimit: 1,
    totalPages: 0,
    calories: []
  },

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
        case "CALORIES_SUCCESS":
          return {
            ...state,
            documentsIsLoading: false,
            documents: {
              ...payload,
            }
          }
      default:
        return state;
    }
  }

  export default reducer;