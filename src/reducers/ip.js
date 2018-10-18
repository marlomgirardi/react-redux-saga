const INITIAL_STATE = {
  data: [],
  isFetching: false,
  error: false
}

const ip = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOAD_DATA_REQUEST': {
      return {
        isFetching: true,
        data: [],
        error: false
      }
    }
    default:
      return state
  }
}

export default ip
