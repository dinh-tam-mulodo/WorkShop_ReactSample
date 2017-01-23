//Import React
import React from 'react';
//Import React Componentx
import Datatable from './Datatable';
import Header from './Header';

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