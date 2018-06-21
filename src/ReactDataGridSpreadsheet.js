import React from 'react'
import ReactDataGrid from 'react-data-grid'
import 'bootstrap/dist/css/bootstrap.css'

import './ReactDataGridSpreadsheet.css'

export default class ReactDataGridSpreadsheet extends React.Component {
  constructor (props, context) {
    super(props, context)
    this._columns = [
      {
        key: 'id',
        name: '',
        resizable: false,
        width: 50
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

    this.state = {
      cols: this._columns,
      rows: this.createRows()
    }

    this.getRow = this.getRow.bind(this)
    this.onGridRowsUpdated = this.onGridRowsUpdated.bind(this)
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

    return rows
  };

  getRow (i) {
    return this.state.rows[i]
  };

  onGridRowsUpdated ({fromRow, toRow, updated}) {
    console.log(fromRow, toRow, updated)
    let rows = this.state.rows.slice()

    for (let i = fromRow; i <= toRow; i++) {
      let updatedRow = { ...rows[i], ...updated }
      rows[i] = updatedRow
    }

    this.setState({ rows })
  }

  render () {
    return (
      <ReactDataGrid
        columns={this.state.cols}
        rowGetter={this.getRow}
        rowsCount={this.state.rows.length}
        enableCellSelect
        onGridRowsUpdated={this.onGridRowsUpdated} />)
  }
}
