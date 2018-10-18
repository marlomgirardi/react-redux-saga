import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadData } from './actions'

class Info extends Component {
  render() {
    return <p>Info</p>
  }
}

const mapStateToProps = state => {
  return {
    isFetching: state.ip.isFetching,
    data: state.ip.data,
    error: state.ip.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadData: () => dispatch(loadData())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Info)
