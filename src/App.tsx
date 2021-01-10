import React from 'react';
import logo from './logo.svg';
import './App.css';

import Table, {IColumn} from "./components/Table/Table";
import {IButton} from "./components/Buttons/BaseButton";

const columns : IColumn[] = [
    {
        id: 'firstname',
        title: 'Firstname',
    },
    {
        id: 'lastname',
        title: 'Lastname',
    }
]

const rows = [
    {
        firstname: 'Jan',
        lastname: 'Kowalski'
    },
    {
        firstname: 'Anna',
        lastname: 'Nowak'
    }
]
const actions : IButton[] = [
    {
        type: 'delete',
        title: 'Delete'
    }
]



function App() {


  return (
    <div className="App">
      <header className="App-header">
        <Table columns={columns} rows={rows} actions={actions}/>
      </header>
    </div>
  );
}

export default App;
