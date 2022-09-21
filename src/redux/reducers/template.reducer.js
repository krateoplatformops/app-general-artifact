import { templateConstants } from '../constants'

const initialState = {
  loading: false,
  skeletonLoading: false,
  error: null,
  list: null,
  result: false
}

export default function template(state = initialState, action) {
  switch (action.type) {
    case templateConstants.TEMPLATE_LOAD:
      return {
        ...state,
        skeletonLoading: true,
        result: false,
        list: null,
        error: null
      }
    case templateConstants.TEMPLATE_LOAD_SUCCESS:
      return {
        ...state,
        result: true,
        list: action.payload.list,
        skeletonLoading: false
      }
    case templateConstants.TEMPLATE_LOAD_FAILURE:
    case templateConstants.TEMPLATE_DELETE_FAILURE:
    case templateConstants.TEMPLATE_CREATE_FAILURE:
      return {
        ...state,
        loading: false,
        skeletonLoading: false,
        result: true,
        error: action.payload
      }
    case templateConstants.TEMPLATE_UPDATE:
    case templateConstants.TEMPLATE_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        list:
          state.list === null
            ? [action.payload]
            : state.list.findIndex(
                (x) => x.metadata.uid === action.payload.metadata.uid
              ) === -1
            ? state.list.concat(action.payload)
            : state.list.map((item) => {
                return item.metadata.uid === action.payload.metadata.uid
                  ? action.payload
                  : item
              })
      }
    case templateConstants.TEMPLATE_RESET:
      return {
        ...initialState
      }
    case templateConstants.TEMPLATE_DELETE:
    case templateConstants.TEMPLATE_CREATE:
      return {
        ...state,
        loading: true
      }
    case templateConstants.TEMPLATE_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        list: state.list.filter((x) => x.metadata.uid !== action.payload)
      }
    default:
      return state
  }
}
