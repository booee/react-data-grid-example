import React from 'react'
import ReactDataGrid from 'react-data-grid'
import { Editors, Formatters } from 'react-data-grid-addons'

import DateCell from './DateCell'

import 'bootstrap/dist/css/bootstrap.css'
import './ReactDataGridSpreadsheet.css'

const teams = [
  { id: 'fl', value: 'fl', text: 'Florida' },
  { id: 'ga', value: 'ga', text: 'Georgia' },
  { id: 'sc', value: 'sc', text: 'South Carolina' },
  { id: 'nc', value: 'nc', text: 'North Carolina' }
]

const positions = [
  { id: 'qb', value: 'qb', text: 'Quarterback' },
  { id: 'rb', value: 'rb', text: 'Running Back' },
  { id: 'wr', value: 'wr', text: 'Wide Receiver' },
  { id: 'te', value: 'te', text: 'Tight End' }
]

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
        key: 'dob',
        name: 'DOB',
        resizable: true,
        editable: true,
        editor: DateCell.Editor,
        formatter: DateCell.Formatter
      },
      {
        key: 'team',
        name: 'Team',
        resizable: true,
        editable: true,
        editor: <Editors.DropDownEditor options={teams} />,
        formatter: <Formatters.DropDownFormatter options={teams} value='ga' />
      },
      {
        key: 'position',
        name: 'Position',
        resizable: true,
        editable: true,
        editor: <Editors.DropDownEditor options={positions} />,
        formatter: <Formatters.DropDownFormatter options={positions} value='wr' />
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
        dob: '01-01-2000',
        team: 'sc',
        position: 'qb',
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
    // console.log('row updated', updated)
    const rows = this.state.rows

    for (let i = fromRow; i <= toRow; i++) {
      let updatedRow = { ...rows[i], ...updated }
      rows[i] = updatedRow
      console.log('updated row ' + i, updatedRow)
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
        onGridRowsUpdated={this.onGridRowsUpdated}
        minHeight={600} />)
  }
}
