import { templateConstants } from '../constants'

const initialState = {
  loading: false,
  error: null,
  list: null,
  result: false
}

export default function template(state = initialState, action) {
  switch (action.type) {
    case templateConstants.TEMPLATE_LOAD:
      return {
        ...state,
        loading: true,
        result: false,
        list: null
      }
    case templateConstants.TEMPLATE_LOAD_SUCCESS:
      return {
        ...state,
        result: true,
        list: action.payload,
        loading: false
      }
    case templateConstants.TEMPLATE_LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        result: true,
        error: action.payload
      }
    case templateConstants.TEMPLATE_UPDATE:
      return {
        ...state,
        list:
          state.list === null
            ? [action.payload]
            : state.list.findIndex((x) => x._id === action.payload._id) === -1
            ? state.list.concat(action.payload)
            : state.list.map((item) => {
                return item._id === action.payload._id ? action.payload : item
              })
      }
    case templateConstants.TEMPLATE_RESET:
      return {
        ...initialState
      }
    default:
      return state
  }
}
