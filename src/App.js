import React, { Component } from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
	return (
	<div className="App">
	<header className="App-header">
	<img src={logo} className="App-logo" alt="logo" />
	<p>
	Edit <code>src/App.js</code> and save to reload Part2
	</p>
	<a
	className="App-link"
	href="https://react.js.org"
	target="_blank"
	rel="noopene noreferrer"
	> Learn React
	</a>
	</header>
	</div>
	);
    }
}
export default withAuthenticator(App);

