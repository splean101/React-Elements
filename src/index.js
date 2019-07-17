import React from 'react';
import ReactDOM from 'react-dom';

const Title = React.createElement('h1', {id: 'title'}, 'Hello World!');

ReactDOM.render(Title, document.getElementById('div1'));