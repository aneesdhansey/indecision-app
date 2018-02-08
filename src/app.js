import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css'
import './styles/styles.scss'

import IndecisionApp from './IndecisionApp'

const appRoot = document.getElementById('app');
ReactDOM.render(<IndecisionApp />, appRoot);
