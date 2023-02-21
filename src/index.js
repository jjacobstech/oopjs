require('file-loader?name=[name].[ext]!./index.html');
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App.js';

const appElement = document.getElementById('oop');

ReactDOM.render(<App />, appElement);