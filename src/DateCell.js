import React from 'react'
import PropTypes from 'prop-types'
import ReactDataGrid from 'react-data-grid'
import moment from 'moment'

class Editor extends ReactDataGrid.editors.EditorBase {
  getInputNode () {
    return this.inputNode
  }

  getValue () {
    const value = this.getInputNode().value
    const date = moment(value, 'MM-DD-YYYY')
    var updated = {}
    updated[this.props.column.key] = date.isValid() ? date.format('MM-DD-YYYY') : value
    return updated
  }

  render () {
    const {
      value,
      onBlur
    } = this.props

    return (
      <div>
        <input
          onBlur={onBlur}
          ref={(inputRef) => { this.inputNode = inputRef }}
          defaultValue={value} />
      </div>
    )
  }
}

class Formatter extends React.Component {
  static get propTypes () {
    return {
      value: PropTypes.string.isRequired
    }
  }

  render () {
    const { value } = this.props
    const date = moment(value, 'MM-DD-YYYY')
    const displayValue = date.isValid() ? date.format('MMM DD YYYY') : value
    const style = {}
    if (!date.isValid()) {
      style.color = 'red'
    }
    return (
      <div style={style}>
        {displayValue}
      </div>
    )
  }
}

export default { Editor, Formatter }
