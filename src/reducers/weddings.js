import { Actions } from 'src/actions/actions.js'

const initialState = []

function weddings(state = initialState, action) {
  let newState = { ...state }

  switch (action.type) {
    case Actions.FETCH_WEDDINGS_START:
      break
    case Actions.FETCH_WEDDINGS_END:
      break
  }

  return newState
}

export default weddings
