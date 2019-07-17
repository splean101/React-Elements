import React from 'react';
import ReactDOM from 'react-dom';

let arr = [[23, 32], [69, 96]];

function createReactTable (data, container) {
let Table = React.createElement('table', { id: 'table' },
    React.createElement('tbody', null,
        React.createElement('tr', null,
            React.createElement('td', null, data[0][0]),
            React.createElement('td', null, data[0][1])
        ),
        React.createElement('tr', null,
            React.createElement('td', null, data[1][0]),
            React.createElement('td', null, data[1][1])
        )
    )
);
ReactDOM.render(Table, document.getElementById(container));
}



createReactTable(arr, 'div1');