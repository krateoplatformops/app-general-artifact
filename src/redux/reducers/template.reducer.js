import { templateConstants } from '../constants'

const initialState = {
  loading: false,
  ajaxLoading: false,
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
    case templateConstants.TEMPLATE_DELETE_FAILURE:
      return {
        ...state,
        loading: false,
        ajaxLoading: false,
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
    case templateConstants.TEMPLATE_DELETE:
      return {
        ...state,
        ajaxLoading: true
      }
    case templateConstants.TEMPLATE_DELETE_SUCCESS:
      return {
        ...state,
        ajaxLoading: false,
        list: state.list.filter((x) => x._id !== action.payload)
      }
    default:
      return state
  }
}
