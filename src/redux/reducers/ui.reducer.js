import { uiConstants } from '../constants'

const initialState = {
  templateViewMode: 'grid'
}

export default function register(state = initialState, action) {
  switch (action.type) {
    case uiConstants.UI_CHANGE_TEMPLATE_VIEW_MODE:
      return {
        ...state,
        templateViewMode: state.templateViewMode === 'grid' ? 'list' : 'grid'
      }
    default:
      return state
  }
}
