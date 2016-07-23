import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router } from 'react-router';

import Home from './pages/Home';

const app=document.getElementById('app');
ReactDOM.render(<Router>
					<Route path='/' component={Home} />
				</Router>, app);