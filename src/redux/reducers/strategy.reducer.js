import { strategyConstants } from '../constants'

const initialState = {
  loading: false,
  error: null,
  result: false,
  list: null,
  skeletonLoading: false
}

export default function strategy(state = initialState, action) {
  switch (action.type) {
    case strategyConstants.STRATEGY_LOAD:
      return {
        ...state,
        skeletonLoading: true,
        result: false,
        list: null,
        error: null
      }
    case strategyConstants.STRATEGY_LOAD_SUCCESS:
      return {
        ...state,
        result: true,
        list: action.payload.strategies,
        skeletonLoading: false
      }
    case strategyConstants.STRATEGY_LOAD_FAILURE:
    case strategyConstants.STRATEGY_CREATE_FAILURE:
    case strategyConstants.STRATEGY_DELETE_FAILURE:
      return {
        ...state,
        loading: false,
        skeletonLoading: false,
        result: true,
        error: action.payload
      }
    case strategyConstants.STRATEGY_CREATE:
    case strategyConstants.STRATEGY_DELETE:
      return { ...state, loading: true, error: null }
    case strategyConstants.STRATEGY_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        list:
          state.list === null
            ? [action.payload]
            : state.list.concat(action.payload)
      }
    case strategyConstants.STRATEGY_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        list: state.list.filter(
          (x) => x.metadata.uid !== action.payload.metadata.uid
        )
      }
    case strategyConstants.STRATEGY_RESET:
      return {
        ...initialState
      }
    default:
      return state
  }
}
