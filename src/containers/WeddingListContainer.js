import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import WeddingsList from 'src/components/WeddingsList.js'

function mapStateToProps(state) {
  return {
    weddings: state.weddings
  }
}


export default connect(mapStateToProps, null)(WeddingsList)
