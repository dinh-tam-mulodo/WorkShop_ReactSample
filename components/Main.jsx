//Import React
import React from 'react';

//Import ReactDom
import ReactDOM from 'react-dom';

//Import React Componentx
import Datatable from './Datatable';
import Header from './Header';

import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

class Main extends React.Component {
   render() {
      return (
         <div>
            <ul>               
               <li>Account</li>
               <li>About</li>
            </ul>
            {this.props.children}
         </div>
      )
   }
}

export default Main;

class App extends React.Component{
	render(){
		return(
			<div>
			<Header headerName= 'WorkShop' headerTitle="React"/>
			<Datatable/>
			</div>
		);
	}
}
export default App;

class About extends React.Component {
   render() {
      return (
         <div>
            <h1>This app had created by Rinkitori Tam</h1>
         </div>
      )
   }
}

export default About;