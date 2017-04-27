/* Actions */
export const Actions = {
  FETCH_WEDDINGS_START: 'FETCH_WEDDINGS_START',
  FETCH_WEDDINGS_END: 'FETCH_WEDDINGS_END'
}

/* Action creators */
export const ActionCreators = {

  // UPDATE_DIRECTION action creator
  fetchWeddingsStart: () => {
    return { type: Actions.FETCH_WEDDINGS_START, payload: null }
  },

  // TURN action creator
  fetchWeddingsEnd: (weddings) => {
   return { type: Actions.FETCH_WEDDINGS_END, payload: { weddings: weddings } }
  }

}
