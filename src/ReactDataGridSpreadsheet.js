import React from 'react'
import ReactDataGrid from 'react-data-grid'
import 'bootstrap/dist/css/bootstrap.css'

class RowNumberFormatter extends React.Component {
  render () {
    return (
      <span style={{ color: '#BBB', fontSize: 'smaller' }}>
        {this.props.value}
      </span>)
  }
}

export default class ReactDataGridSpreadsheet extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.createRows()
    this._columns = [
      {
        key: 'id',
        name: '',
        resizable: false,
        width: 50,
        formatter: RowNumberFormatter
      },
      {
        key: 'player',
        name: 'Player',
        resizable: true,
        editable: true
      },
      {
        key: 'team',
        name: 'Team',
        resizable: true,
        editable: true
      },
      {
        key: 'position',
        name: 'Position',
        resizable: true,
        editable: true
      },
      {
        key: 'offense',
        name: 'Offense',
        resizable: true,
        editable: true
      },
      {
        key: 'gamesPlayed',
        name: 'Games Played',
        resizable: true,
        editable: true
      },
      {
        key: 'gamesStarted',
        name: 'Games Started',
        resizable: true,
        editable: true
      },
      {
        key: 'pointsScored',
        name: 'Points Scored',
        resizable: true,
        editable: true
      },
      {
        key: 'turnovers',
        name: 'Turnovers',
        resizable: true,
        editable: true
      },
      {
        key: 'somethingElse',
        name: 'Something Else',
        resizable: true,
        editable: true
      }
    ]

    this.state = null

    this.createRows = this.createRows.bind(this)
    this.rowGetter = this.rowGetter.bind(this)
  }

  createRows () {
    let rows = []
    for (let i = 1; i < 1000; i++) {
      rows.push({
        id: i,
        player: 'Jim Bob',
        team: 'Florida',
        position: 'QB',
        offense: 'Y',
        gamesPlayed: '35',
        gamesStarted: '35',
        pointsScored: 7,
        turnovers: '-5',
        somethingElse: 5
      })
    }

    this._rows = rows
  };

  rowGetter (i) {
    return this._rows[i]
  };

  render () {
    return (
      <ReactDataGrid
        columns={this._columns}
        rowGetter={this.rowGetter}
        rowsCount={this._rows.length} />)
  }
}
